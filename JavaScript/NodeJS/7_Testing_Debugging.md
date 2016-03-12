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