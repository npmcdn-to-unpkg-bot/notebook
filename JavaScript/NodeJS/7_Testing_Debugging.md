# Testing and Debugging

## Testing with Mocha and Chai

Node provides many unit testing frameworks that aid in TDD (Test Driven Development). **Mocha** is one of the most popular testing frameworks and can be installed via npm, `npm install -g mocha` (global install). To run a mocha test, simply enter `mocha` in the command-line.

In order for mocha to function properly, we need to create a _test_ directory within our project where our unit tests will live, `mkdir test`.

Let's make _sample-test.js_ a mocha test and see it run:

```javascript
// sample-test.js

// describe() used to set-up test suite
// it take in a description of the test and a callback
describe('printName()', function() {
  // Each test uses it(), passing in description of
  // what the function being tested should do
  it("should print the last name first");
})
```

If we were to run this in the terminal we would see our test stubbed:

```
$ mocha

  Tools
    printName()
      - should print the last name first

  0 passing (11ms)
  1 pending
```

Where mocha does provide a suite for _describing_, _running_, and _building_ tests, but it does not give us a way to check values. That is where the **Chai** module comes in, `npm install chai --save-dev` (save Chai to dev dependencies because it is only used to test app). And now moving back to the test file we can complete our test:

```javascript
// sample-test.js

// load chai and use expect() function
// of chai assertion engine
// (can also use should() and assert())
var expect = require("chai").expect;
// Import custom module to be tested
var tools = require("../lib/tools");
describe('printName()', function() {
  // Provide callback for test
  it("should print the last name first", function () {
    // Assign function invocation to results
    var results = tool.printName({
      firstName: "Bill",
      lastName: "Banks"
    });
    // Use expect().to.equal() to test if results
    // match "Banks, Bill"
    expect(results).to.equal("Banks, Bill");

  });

})
```

Now we will write our custom _tools_ module:

```javascript
// tools.js

module.exports = {
  // Object literal enhancement (method es6)
  printName(person) {
    return `${person.lastName}, ${person.firstName}`;
  }
}
```

And when we run our test this time:

```
$ mocha

  Tools
    printName()
     √ Should print the last name first

  1 passing (15ms)
```

Success! We have now begin TDD Unit Testing with Mocha and Chai.

> **Note:** The best practice with TDD is to: 1. Write the test, 2. Watch it fail, 3. Make the test pass.

---

## Asynchronous Mocha Testing

Sometimes you will want to test asynchronous actions, for example when working with HTTP requests. When we handle this in mocha we have to tell Mocha to wait for the task to complete before running the test.

For this example we will test a script that will load Abraham Lincoln's Wikipedia page:

```javascript
var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("Tools", function() {

  // You can nest describe suites within each other
  describe('printName()', function() {
    it("should print the last name first", function () {
      var results = tool.printName({
        firstName: "Bill",
        lastName: "Banks"
      });
      expect(results).to.equal("Banks, Bill");
    });

    // Create new describe suite for async tests
    describe("loadWiki", function() {
      // Set amount of time before mocha fails
      // (default is 2000ms)
      this.timeout(5000);
      // Create test, passing in a callback function
      // (done()) making mocha wait until all callbacks
      // before it are done running.
      it("Load Abe Lincoln's Wiki", function(done) {

        // Custom module takes object literal and
        // a callback function.
        tools.loadWiki({
          firstName: "Abraham",
          lastName: "Lincoln"
        }, function(html) {
          // Passes if callback evoked and
          // html is returned
          expect(html).to.be.ok;
          // Tells mocha to be done with test
          // once called
          done();
        });
      });
    });
});
```

Let's now write our custom asynchronous module, _loadWiki_:


```javascript
// tools.js

module.exports = {
  printName(person) {
    return `${person.lastName}, ${person.firstName}`;
  }
  // Add loadWiki module with person and callback
  loadWiki(person, callback) {
    // Code will go here
  }
}
```

Now we will watch the test fail:


```
$ mocha

  Tools
    printName()
     √ Should print the last name first

    loadWiki()
      1) Load Abe Lincoln's Wiki

  1 passing (2s)
  1 failing

  1) Tools loadWiki():
    Error: timeout of 2000ms...
```

So now that we have watched the test fail, we can complete our loadWiki function and make the test pass:

```javascript
// tools.js

// Load https module to GET wikipedia page
var https = require("https");
module.exports = {
  printName(person) {
    return `${person.lastName}, ${person.firstName}`;
  }
  // Add loadWiki module with person and callback
  loadWiki(person, callback) {
    // Create url for request, templating in first
    // and last names
    var url = `https://en.wikipedia.org/${person.first}_${person.last}`;
    // Make get request
    https.get(url, function(res) {
      // Set text encoding
      res.setEncoding("UTF-8");
      // Create var to collect data stream
      var body = "";
      // Listen for data event
      res.on("data", function(chunk) {
        body += chunk;
      });
      // Invoke callback, sending page, when res.end
      res.on("end", function() {
        callback(body);
      });
    });
  }
}
```

Now we should see both tests pass:

```
$ mocha

  Tools
    printName()
     √ Should print the last name first

    loadWiki()
     √ Load Abe Lincoln's Wiki (267ms)

  2 passing (284ms)
```

> **Note:** Keep in mind that these asynchronous tests can take some time, and modifying the default timeout within a test could be necessary. In many cases it would benefit to use mock data to speed testing (More about this in the next section).

---

## Mocking a Server with Nock

Sometimes it doess't make sense to test using some of the dependencies that are necessary upon deployment while in production. For example, relying on Wikipedia's server can take sometime, and slow down our testing process.

In this case the best solution would be to create a _Mock Server_, much like _Mock Data_, it can serve as a way to quickly and reliably test our code. The node module **Nock** can help use do this by allowing us to create mock web servers, `npm install nock --save-dev`.

Mocha has a concept called **hooks**, and we can add hooks before (entire suite) or before each test, or after (entire suite) or after each test. It allows us to define code to run before/after test suite.

```javascript
var expect = require("chai").expect;
var tools = require("../lib/tools");
// require nock
var nock = require("nock");

describe("Tools", function() {

  describe('printName()', function() {
    it("should print the last name first", function () {
      var results = tool.printName({
        firstName: "Bill",
        lastName: "Banks"
      });
      expect(results).to.equal("Banks, Bill");
    });

    describe("loadWiki", function() {
      
      // Create hook to run callback function
      // before test suite
      before(function() {
        // Create nock web-server: 
        // 1. passing in domain name
        // 2. chaining type of request to mock passing in URI
        // 3. chaining reply(), passing what to reply with
        nock("https://en.wikipedia.org")
          .get("/wiki/Abraham_Lincoln")
          .reply(200, "Mock Abe Lincoln Data"); // Status and Body
      });

      it("Load Abe Lincoln's Wiki", function(done) {

        tools.loadWiki({
          firstName: "Abraham",
          lastName: "Lincoln"
        }, function(html) {
          // Change from to.be.ok to to.equal()
          expect(html).to.be.equal("Mock Abe Lincoln Data");
          done();
        });
      });
    });
});
```

Now when we test this we can see that it passes and that it does not take even close to as long as it did before:


```
$ mocha

  Tools
    printName()
     √ Should print the last name first

    loadWiki()
     √ Load Abe Lincoln's Wiki

  2 passing (38ms)
```

---


## Injecting Dependencies with Rewire

Servers are not the only dependencies that can be mocked, but rather any dependency can be mocked. Whenever we are testing a module of a function, we would refer to it as the **SUT**, or the _System Under Test_. Other modules the SUT is dependent on are known as **Collaborators**. In some cases, the collaborators for a specific SUT could still be in development and would therefore require us to mock out the dependency accordingly.

Whenever the SUT uses data, we want to use mock data instead of the real data, so that our tests don't change or mutate production data.

**Rewire** is a node module that will also us to inject our mocks, `npm install rewire --save-dev`. 

Let's write our test:

```javascript
// ./test/order-spec.js

var expect = require("chai").expect;
// Load rewire
var rewire = require("rewire");

// Our SUT loaded with rewire (rather than require)
// This allows us to get/set private variables in order mod
var order = rewire("../lib/order");

describe("Orderding Items", function() {

  // Add beforeEach hook
  beforeEach(function() {
    // Create fake item data for tests
    // Using 'this' (this === mocha obj) allows
    // us to use testData in our test
    this.testData = [
      {sku: "AAA", qty: 10},
      {sku: "BBB", qty: 30},
      {sku: "CCC", qty: 20}
    ];

    // Set inventoryData (from order module) to our testData
    // Non-destructively overwritting the variable for testing
    order.__set__("inventoryData", this.testData);
  });

  it("order an item when there are enough in stock", function(done) {

    // Asynchronous Test
    order.orderItem("CCC", 3, function() {
      // Tell mocha to end test
      done();
    });

  });

});
```

And if we run this test it should pass because we injected the data necessary for the code to run properly:


```
$ mocha

  Ordering Items
ordering 3 of item # CCC
order shipped, tracking - 123456789
    √ order an item when there are enough in stock (1507ms)
```

This shows how rewire can allow us to inject variables into our SUT, making it easier to test when certain dependencies are not yet made availible to us.


---


## Advanced Testing Sinon Spies

**Sinon JS** is a module that we can use to help us create mock objects for our tests. Sinon has a number of tools to improve testing. One in particular is **Sinon Spies**, special kinds of functions that record details about how they are called, what arguments they are called with, and the state of the _this_ object. 

We can use spies in place of real functions, allowing us to check if a specific function has been invoked without having to invoke a real function, `npm install sinon --save-dev`.

As an example let's say we didn't want the console.log made to the console every time we ran a test, but we did want to make sure the tests passed and the console.log function was called. This is perfect for sinon spies:

```javascript
// ./test/order-spec.js

var expect = require("chai").expect;
var rewire = require("rewire");

var order = rewire("../lib/order");

var sinon = require("sinon");

describe("Orderding Items", function() {

  beforeEach(function() {
    this.testData = [
      {sku: "AAA", qty: 10},
      {sku: "BBB", qty: 30},
      {sku: "CCC", qty: 20}
    ];

    // Create a mock console object
    this.console = {
      // spy will give details about how console.log
      // is called and with what data
      log: sinon.spy();
    };

    order.__set__("inventoryData", this.testData);
    // For testing, replace the console object with 
    // fake console in the SUT (using rewire)
    order.__set__("console", this.console);
  });

  it("order an item when there are enough in stock", function(done) {

    // Preserve scope of 'this' so that it refers to mocha
    var _this = this;

    order.orderItem("CCC", 3, function() {

      // Check sinon spy callCount of mock console.log
      // Should call console.log twice
      expect(_this.console.log.callCount).to.equal(2);

      done();
    });

  });

});
```

And when we run this test it will only pass if console.log is in fact called two times (which it is):

```
$ mocha

  Ordering Items
ordering 3 of item # CCC
order shipped, tracking - 123456789
    √ order an item when there are enough in stock (1507ms)
```

With the use of rewire and sinon spies, we can inject a mock console (or any other object for that matter), and not have to see every log message on the tests.


---


## Advanced Testing with Sinon Stubs

**Sinon Stubs** are essentially more powerful spies, able to do anything that a spy can do while additionally allowing you to control the behavior of a particular function. Stubs should be used when the program requires us to invoke functions that behave a certain way. Either they return data, invoke a callback with data, or even throw an error.


```javascript
// ./test/order-spec.js

var expect = require("chai").expect;
var rewire = require("rewire");

var order = rewire("../lib/order");

var sinon = require("sinon");

describe("Orderding Items", function() {

  beforeEach(function() {
    this.testData = [
      {sku: "AAA", qty: 10},
      {sku: "BBB", qty: 30},
      {sku: "CCC", qty: 20}
    ];

    this.console = {
      log: sinon.spy();
    };

    // Create a mock warehouse
    this.warehouse = {
      // yields() will invoke the callback that is returned
      // by the packageAndShip function naturally, 
      // allowing us to also add arguments for that callback.
      // In this case a tracking number.
      packageAndShip: sinon.stub().yields(10987654321)
    };

    order.__set__("inventoryData", this.testData);
    order.__set__("console", this.console);
    // Inject mock warehouse
    order.__set__("warehouse", this.warehouse);
  });

  it("order an item when there are enough in stock", function(done) {

    var _this = this;

    order.orderItem("CCC", 3, function() {

      expect(_this.console.log.callCount).to.equal(2);

      done();
    });

  });


  describe("Warehouse Interaction", function() {

    beforeEach(function() {

      // Create spy to check if orderItem callback it
      // invoked properly
      this.callback = sinon.spy();

      // Invoke orderItem function before each test
      order.orderItem("CCC", 2, this.callback);
    });

    it("recieves a tracking number", function() {
      // Expect orderItem callback to be called
      // with mock tracking number returned by packageAndShip
      // (sinon stub)
      expect(this.callback.calledWith(10987654321)).to.equal(true);
    });

    it("calls packageAndShip with the correct sku and quantity", function() {
      // Checks if beforeEach hook call packageAndShip
      // for correct number of items
      expect(this.warehouse.packageAndShip.calledWith("CCC", 2)).to.equal(true);
    });

  });


});
```

And this time the tests should pass but much quicker because we mocked out the data and dependecies accordingly with Sinon Stubs:

```
$ mocha

  Ordering Items
ordering 3 of item # CCC
order shipped, tracking - 123456789
    √ order an item when there are enough in stock
    Warehouse Interaction
      √ recieves a tracking number
      √ calls packageAndShip with the correct sku and quantity

3 passing (57ms)
```

Using rewire and sinon we have greatly increased the speed of our tests, while also relying less on dependecies to properly test our code.


---

## Code Coverage with Istanbul

**Istanbul** is a node module that we can use to create _Code Coverage Reports_, letting us know which lines of code our tests actually cover. `sudo npm install -g istanbul`. 

Istanbul can work anywhere, but it can work hand in hand with Mocha as well, allowing for us to create code coverage reports from our code coverage tests.

To run a Code Coverage Report navigate to the terminal and enter:

```
$ istanbul cover _mocha

  Ordering Items
ordering 3 of item # CCC
order shipped, tracking - 123456789
    √ order an item when there are enough in stock
    Warehouse Interaction
      √ recieves a tracking number
      √ calls packageAndShip with the correct sku and quantity

3 passing (57ms)

==================================================
Writing coverage object [/path/user.../coverage.json]
Writing coverage reports at [/path/user.../coverage]

============== Coverage Summary ==================
Statements  : 83.78% ( 31/37 )
Branches    : 62.5%  ( 5/8 )
Functions   : 81.82% ( 9/11 )
Lines       : 83.33% ( 30/36 )
==================================================
```

> **Note:** We use the `_mocha` because istanbul won't work with regular `mocha`, we need the `_mocha` process rather.


We have created a code coverage report, with a summary that breaks down the coverage into percentages and categories.

We can find the report at the specified path to the coverage report. Navigating there, simply open the Icov-report folder and open the index.html in a browser.

Opening this file you will find a breakdown of all the files in the folder that is being tested. Istanbul goes line by line, noting specific spots where tests are lacked.

Here is an image to get an idea of what it looks like:

![example of istanbul](http://blog.geraldpereira.com/img/blog/2015-09-17-nodejs-express-typescript/istanbul-js-coverage.png) 



---

## Testing HTTP Endpoints with Supertest

We also need to test our HTTP applications, something that the Supertest module allows for us to do. `npm install supertest --save-dev`.

In order to utilize the Supertest module, we need to first have an Express app. Within the file, the app should be exported via _module.exports()_, this allows for the app to be tested accordingly.

Here is a sample of implementing Supertest in an Mocha tests:
(Check previous sections for details on pre-written content):

```javascript
// request variable is the supertest module
// a function that allows us to make requests 
var request = require("supertest");
var expect = require("chai").expect;
var rewire = require("rewire");
var app = rewire("../app");

descibe("Dictionary App", function() {
    
  it("Loads the home page", function(done) {
    // Make GET request of app at "/" route
    // expecting 200 Status Code.
    // The end() function is necessary to end
    // the request, invoking the function when done.
    request(app).get("/").expect(200).end(done);
  });

  describe("Dictionary API", function() {

    beforeEach(function() {

      this.defs = [
        {
          term: "One",
          defined: "Term One Defined"
        },
        {
          term: "Two",
          defined: "Term Two Defined"
        }
      ];

      app.__set__("skierTerms", this.defs);
    });

    it("GETS dictionary-api", function(done) {
      // Make a GET request to the dictionary-api route
      request(app).get("/dictionary-api").expect(200).end(done);
    });

    it("POSTS dictionary-api", function(done) {
      // Make a POST request to the dictionary-api route
      // Include data to be sent in the send() in obj format
      request(app)
        .post("/dictionary-api")
        .send({"term": "Three", "defined": "Term Three"})
        .expect(200)
        .end(done);
    });
    
    it("DELETES dictionary-api", function(done) {
      // Make DELETE request to the dictionary-api route
      // appending the term to delete as a URI on the path
      request(app)
        .delete("/dictionary-api/One")
        .expect(200)
        .end(done);
    });

  });

});
```

And now let's run our test:

```
$ mocha
Express app running on port 3000

  Dictionary App
GET request for '/' - {}
    √ Loads the home page (47ms)
    Dictionary API
GET request for '/dictionary-api' - {}
      √ GETS dictionary-api
POST request for '/dictionary-api' - {"term": "Three", "defined": "Term Three"}
      √ POSTS dictionary-api
DELETE request for '/dictionary-api/One' - {}
      √ DELETES dictionary-api

  4 passing (108ms)
```

So now we are testing the HTTP end-points of our application successfully, whether it be HTML or JSON data. 



---


## Checking Server Responses with Cheerio

Although in the previous section we did test for HTTP end-points in our application, being able to properly make requests, it is also important for us to be able to test the data that gets returned to make sure that is correct as well.

**Cheerio** allows for easy navigating through a DOM in jQuery-like manners. It will come in handy when parsing HTML content to test. `npm install cheerio --save-dev`


```javascript
var request = require("supertest");
var expect = require("chai").expect;
// Require Cheerio
var cheerio = require("cheerio");
var rewire = require("rewire");
var app = rewire("../app");

descibe("Dictionary App", function() {
    
  it("Loads the home page", function(done) {
    // check the response data on the homepage request
    request(app).get("/").expect(200).end(function(err, res) {
      // Load cheerio, passing in html body content
      var $ = cheerio.load(res.text)
      // Search just like jQuery (css-selectors)
      // Selecting the text value of the element
      var pageHeading = $("body>h1:first-child").text();
      expect(pageHeading).to.equal("Skier Dictionary");
    });
  });

  describe("Dictionary API", function() {

    beforeEach(function() {

      this.defs = [
        {
          term: "One",
          defined: "Term One Defined"
        },
        {
          term: "Two",
          defined: "Term Two Defined"
        }
      ];

      app.__set__("skierTerms", this.defs);
    });

    it("GETS dictionary-api", function(done) {
      // Protect 'this.defs' from falling out of scope
    var defs = this.defs;

    // Rather than invoking done() within end() directly,
    // we provide a callback to check response data
    request(app).get("/dictionary-api").expect(200).end(function (err, res) {
      // Parse JSON response into JS array
      var terms = JSON.parse(res.text);
      // Check if response deep equals defs
      // (comparing two js objects)
      expect(terms).to.deep.equal(defs);
      // End mocha test
      done();
    });
    });

    it("POSTS dictionary-api", function(done) {
      request(app)
        .post("/dictionary-api")
        .send({"term": "Three", "defined": "Term Three"})
        .expect(200)
        .end(done);
    });
    
    it("DELETES dictionary-api", function(done) {
      request(app)
        .delete("/dictionary-api/One")
        .expect(200)
        .end(done);
    });

  });

});
```

If we run our tests they should pass:

```
$ mocha
Express app running on port 3000

  Dictionary App
GET request for '/' - {}
    √ Loads the home page (47ms)
    Dictionary API
GET request for '/dictionary-api' - {}
      √ GETS dictionary-api
POST request for '/dictionary-api' - {"term": "Three", "defined": "Term Three"}
      √ POSTS dictionary-api
DELETE request for '/dictionary-api/One' - {}
      √ DELETES dictionary-api

  4 passing (108ms)
```


We have now tested both the HTTP end-points and the data that is transmitted from the using the supertest module with the assistance of cheerio (For parsing the HTML).







