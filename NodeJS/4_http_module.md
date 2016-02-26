# The HTTP Module

The http module is used for creating web servers, making requests, and handling responses. There are two modules for this, _HTTP_ and _HTTPS_. Both are very similar, but _HTTPS_ is used for secure server (we would be required to provide security certificate).

### Making a Request

When requesting from an _HTTPS_ server we need to use that specific module. Let's try requesting content from wikipedia. In order to work with a request in the _HTTPS_ modules we need to pass in an object literal of options (hostname, port, path, method):


```javascript
// Require https module
var https = require("https");
var fs = require("fs");

// Set up request options
var options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/George_Bush",
  method: "GET"
};

// Make a request passing in options
// Calling callback with response content passed as arg
// When received.
var req = https.request(options, function(res) {
  // Create variable to collect data stream
  var responseBody = "";

  console.log("Response has started...");
  // Log http status code from res object
  console.log(`Server Status: ${res.statusCode} `);
  // Log response header from res object using formatting string
  console.log("Response Headers: &j", res.header);

  // Set encoding of data to be readable
  res.setEncoding("UTF-8");

  // Set listener for first data event and log chunk
  res.once("data", function(chunk) {
    console.log(chunk);
  });

  // Set listener for every data event, logging chunk.length
  // and concatenating chunk to var
  res.on("data", function(chunk) {
    console.log(`---chunk---${chunk.length}`);
    responseBody += chunk;
  });

  // When the response ends create a file with the collected chunks
  res.on("end", function() {
    fs.writeFile("george.html", responseBody, function(err) {
      if (err) {
        throw err;
      }
      console.log("File Downloaded!");
    });
  });

});

// Set listener for request errors, logging if any occur.
req.on("error", function(err) {
  console.log(`problem with request: ${err.message}`);
});
// End our request to the server.
req.end();
```

Run the app:

```
$ node nodeRequest

Response Headers: {"server":"ngix"...}
...
<!DOCTYPE html>
<html lang="en" dir="ltr" class="client-nojs">
<head>
...
---chunk--- 1123
---chunk--- 1344
---chunk--- 1543
---chunk--- 1123
---chunk--- 1764
...
---chunk--- 254
File Downloaded!
```


-----

### Building a Web Server

Much like making a request we need to use the _HTTP_ or _HTTPS_ modules when creating a basic server in Node. We can do this by utilizing the `createServer()` method, which will run a callback whenever a request/response is made.

The _request_ object parameter will contain information about the requested headers, any data that is going along with the request, as well as information about the user. The _response_ object parameter passed in is empty and it will be our job to fill in the response (_writing response headers, body, etc._).

```javascript
var http = require("http");

// We create a http server with a callback
var server = http.createServer(function(req, res) {
  // Write our response head with a status code of 200 (OK)
  // and a response header describing content type
  res.writeHead(200, {"Content-Type": "text/html"});

  // End our response, sending data upon finishing
  // with request url and method information.
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML Response</title>
      </head>
      <body>
        <h1>Serving HTML Text</h1>
        <p>Url: ${req.url}, Method: ${req.method}</p>
      </body>
    </html>
    `);

});

// Tell the server to listen on port 3000
server.listen(3000);

console.log("Server running on port 3000...");
```

> **Note:** It is always a good practice to attach response headers with _content-type_ and a _status-code_, letting the client know what the response will be like.

Run the server:

```
$ node server

Server running on port 3000...
```

Navigate to http://localhost:3000:

<h1>Serving HTML Text</h1>
<p>Url: /, Method: GET</p>


> **Note:** Any request to the server will fire the callback, so it is our job to handle the logic behind handling the various requests and url paths.



-----

### Serving Files

An important feature of web servers is serving files. In Node we can build a web server using the _HTTP_ module in conjunction with the _fs_ module. We will use the _fs_ module to load the file and _HTTP_ to respond with its contents.

```javascript
var http = require("http");
var fs = require("fs");
var path = require("path");

// Create http server, chaining listening port
http.createServer(function(req, res) {

  // Log the request method and the url path
  console.log(`${req.method} request for ${req.url}`);

  // Handle basic routing logic for "/" root directory
  // else return "404 Not Found"
  if (req.url === "/") {
    // Read index.html asynchronously, encoding it utf-8, and pass
    // the read data into callback function that will then respond
    // with it accordingly.
    fs.readFile("./public/index.html", "UTF-8", function(err, html) {
      if (err) {
        throw err
      }
      res.writeHead(200, {"Content-Type": "plain/text"});
      // Send read file from server
      res.end(html)
    });
  } else {
    res.writeHead(404, {"Content-Type", "text/plain"});
    res.end("404 File Not Found");
  }

}).listen(3000);

console.log("File Server running on port 3000");
```

Run the server:

```
$ node server

File Server running on port 3000

(after url request made)
GET request for /
```

Navigate to http://localhost:3000:

<h1>Index.html</h1>
<p>This is a static webpage...</p>



**Implementing multiple file paths:**

Although our web server seems to run fine, there is still an issue with serving files that might be linked (images, css styles, javascript files). In order for this to work we would have to manually add logic for those file paths in our server.


```javascript
var http = require("http");
var fs = require("fs");
var path = require("path");

// Create http server, chaining listening port
http.createServer(function(req, res) {

  // Log the request method and the url path
  console.log(`${req.method} request for ${req.url}`);

  // Handle basic routing logic for "/" root directory
  // else return "404 Not Found"
  if (req.url === "/") {
    // Read index.html asynchronously, encoding it utf-8, and pass
    // the read data into callback function that will then respond
    // with it accordingly.
    fs.readFile("./public/index.html", "UTF-8", function(err, html) {
      if (err) {
        throw err
      }
      res.writeHead(200, {"Content-Type": "plain/text"});
      // Send read file from server
      res.end(html)
    });
    // Else if url ends in .css extension
  } else if (req.url.match(/.css$/)) {

    // Create a file path to the requested css resource.
    var cssPath = path.join(__dirname, 'public', req.url);
    // Create a read stream of the file (encoded utf-8)
    var fileStream = fs.createReadStream(cssPath, "UTF-8");
    // Write head with css type
    res.writeHead(200, {"Content-Type": "text/css"});
    // Use pipe to send read stream to writeable stream
    // or simply stream fileStream into the res object.
    fileStream.pipe(res)

  }  else if (req.url.match(/.jpeg$/)) {

    // Create a file path to the requested jpeg resource.
    var imgPath = path.join(__dirname, 'public', req.url);
    // Create a read stream of the file (no encoding bc binary)
    var imgStream = fs.createReadStream(imgPath);
    // Write head with jpeg type
    res.writeHead(200, {"Content-Type": "image/jpeg"});
    // Use pipe to send read stream to writeable stream
    // or simply stream fileStream into the res object.
    fileStream.pipe(res)

  } else {
    res.writeHead(404, {"Content-Type", "text/plain"});
    res.end("404 File Not Found");
  }

}).listen(3000);

console.log("File Server running on port 3000");
```

> **Note:** Using _pipe()_ allows us to pass readable streams into writeable streams and vice-versa. It will automatically handle concatenating data chunks and passing the constructed data for us.

Run the server:

```
$ node server

File Server running on port 3000

(after url request made)
GET request for /
GET request for /styles.css
GET request for /boat.jpeg
```

Navigate to http://localhost:3000:
<div style="padding: 5px; background-color: black;">
  <h1 style="color: white; font-family: Arial">Index.html w/ Css</h1>
  <img src="http://www.boat-wallpapers.com/bulkupload/wallpapers/Sailing%20Boats/sailing-boat-at-sunset.jpg">
  <p style="color: grey; font-family: Georgia">This is a static webpage with style and a boat...</p>
</div>



-----

### Serving JSON Data
