# Web Servers

## The package.json File

A _package.json_ file is a manifest that contains information about an application, allowing the distribution of the code without worrying about the distribution of dependencies.

To create a _package.json_ file simply navigate to the root directory of the application and enter `npm init`. This will walk you through creating a new _package.json_ file.

Here is a breakdown of what's prompted in the `npm init`:

```
name: [Name must be all lower-case with no spaces]
version: [By default 1.0.0]
description: [Basic description of application]
entry point: [By default index.js but can be set to any file]
test command: [...]
git repository: [Git repo for the project (if git project in root it will automatically add it)]
keywords: [List of comma-separated words if published on npm]
author: [Your Name Here]
license: [ISC by default]
```

If at anytime you want to change the _package.json_ file you can edit it via a text editor.

This _package.json_ file can automatically append listed dependencies by running `npm install moduleName --save`. This will append a reference to the 'moduleName' dependency in the _package.json_ and install a local copy of that module.

Now when distributing the application we would not send the node_modules folder containing our dependencies, but rather just the _package.json_ file.

Other users could easily install all of the dependencies by running `npm install` which will download of the listed dependencies automatically.

Finally, to remove modules from a project, simply type `npm remove moduleName --save`.


---

## Intro to Express

_Express_ is a light-weight backend framework that you can use to build complex server-side application logic. When the _Express_ module is properly installed, we can begin using it in our scripts:

```javascript
// Import express module
var express = require("express");

// Create an application instance by invoking express function
var app = express();

// Add a custom middle-ware function use()
// to allow logging of HTTP requests (callback)
// ----
// Note that this is run before static()
// ---
// Passing in request, response, and next func
// that will be run when finished
app.use(function(req, res, next) {
  // Log request method and url
  console.log(`${req.method} request for '${req.url}'`)
  // next() jumps down to the next piece
  // of middle-ware below for further execution
  next();
});

// Add middle-ware to express app
// (middle-ware = static file-server that comes with express)
// We pass 'static' the dir path to serve files from
app.use(express.static("./path/to/www"));

// Tell app to listen on port number
app.listen(3000);

console.log("Express App Running on Port 3000");

// Best practice, allowing app to be loaded into other files
module.exports = app;
```

We are now serving the static files for our application.


---

## Express Routing and CORS

You can't really have a functioning application without _Routing_. We can easily create routes in express and also allow Cross-origin Resource Sharing (_CORS_), allowing our app to be accessed from outside domains.

```javascript
var express = require("express");
// Allows for Cross-origin Resource Sharing
var cors = require("cors");
var app = express();

// Mock API Data
var mockData = [
  {
    term: "Human",
    defined: "The only extant members of Hominina clade (or human clade), a branch of the taxonomical tribe Hominini belonging to the family of great apes."
  },
  {
    term: "Dog",
    defined: "A domesticated canid which has been selectively bred for millennia for various behaviors, sensory capabilities, and physical attributes."
  },
  {
    term: "Insect",
    defined: "A class of invertebrates within the arthropod phylum that have a chitinous exoskeleton, a three-part body (head, thorax and abdomen), three pairs of jointed legs, compound eyes and one pair of antennae."
  }
];

app.use(function(req, res, next) {
  console.log(`${req.method} request for '${req.url}'`)

  next();
});

app.use(express.static("./path/to/www"));

// cors() is a function that will return middle-ware
// ---
// Add Cross-origin Resource Sharing to all api requests
app.use(cors());

// Create url route 'definition-api' that will
// run callback function when 'GET' req made
// ---
// These are the same req and res objects used
// with http module, but express decorates them for us
app.get("/definition-api", function(req, res) {
  // power-up by express that will automatically
  // JSON stringify and set up headers to reply
  // w/ JSON response
  res.json(mockData);

});

app.listen(3000);

console.log("Express App Running on Port 3000");

module.exports = app;
```

Now we are serving the JSON mockData to the client on the route _definition-api_.


---

## Express POST Bodies and Params

We can create routes for other HTTP requests such as: PUT, DELETE, and POST. Adding these routes are similar to what we have done in the previous section, but involve receiving POST bodies.


```javascript
var express = require("express");
var cors = require("cors");
// bodyParser module is middle-ware that will help
// parse data posted to the api (e.g url encoded)
var bodyParser = require("body-parser");
var app = express();


var mockData = [
  {
    term: "Human",
    defined: "The only extant members of Hominina clade (or human clade), a branch of the taxonomical tribe Hominini belonging to the family of great apes."
  },
  {
    term: "Dog",
    defined: "A domesticated canid which has been selectively bred for millennia for various behaviors, sensory capabilities, and physical attributes."
  },
  {
    term: "Insect",
    defined: "A class of invertebrates within the arthropod phylum that have a chitinous exoskeleton, a three-part body (head, thorax and abdomen), three pairs of jointed legs, compound eyes and one pair of antennae."
  }
];

// Add bodyParser middle-ware to parse incoming JSON
app.use(bodyParser.json());
// Add bodyParser middle-ware to parse url encoded
// ---
// only set 'extended' to true if you have large/nested
// post data to parse
app.use(bodyParser.urlencoded({extended: false}));

// bodyParser neatly places all parsed data onto
// the req object
app.use(function(req, res, next) {
  // Additionally log req body as JSON string
  console.log(`${req.method} request for '${req.url} - ${JSON.stringify(req.body)}'`)

  next();
});

app.use(express.static("./path/to/www"));

app.use(cors());

app.get("/definition-api", function(req, res) {

  res.json(mockData);

});

// Add POST route to 'definition-api'
//, handle with callback
app.post("/definition-api", function(req, res) {
  // Push new data to mockData
  mockData.push(req.body);
  // Respond with updated JSON mockData
  res.json(mockData);
});

// Add a DELETE route for specific term
// ---
// ':term' creates new parameter 'term'
// whose value is set to whatever is after api route
app.delete("/definition-api/:term", function(req, res) {
  // 'term' is available via req.params now
  // ---
  // We will now filter it out of mockData terms
  // with javascript built-in filter() method
  mockData = mockData.filter(function(definition) {
    // If 'true' keep if 'false' filter out.
    return definition.term.toLowerCase() !== req.params.term.toLowerCase();
  });
  // Respond with updated JSON mockData
  res.json(mockData);
});

app.listen(3000);

console.log("Express App Running on Port 3000");

module.exports = app;
```


This application can now handle basic HTTP request and has a few routes set up to handle things accordingly.
