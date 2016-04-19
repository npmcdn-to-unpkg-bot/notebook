var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function(req, res) {

  if (req.url === "/") {
    fs.readFile("./public/index.html", "UTF-8", function(err, html) {
      // Handle Errors
      if (err) { logErr(err); }
      // Send response head
      res.writeHead(200, {"Content-Type": "text/html"});
      // Log method and request
      console.log(`${req.method} request for ${req.url}`);
      res.end(html);
    });
  }

  else {
    res.writeHead(404, {"Content-Type": "text/html"});
    console.log(`Invalid ${req.method} request for ${req.url}`);
    res.end(pageNotFound)
  }
});



server.listen(3000);

console.log(`Server listening on port 3000`);
