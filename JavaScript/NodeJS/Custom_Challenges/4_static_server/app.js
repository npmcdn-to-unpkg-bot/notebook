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

  else if (req.url.match(/.+\.css/gi)) {
    fs.readFile("./public/css/style.css", "UTF-8", function(err, css) {
      if (err) { logErr(err); }
      res.writeHead(200, {"Content-Type": "text/css"});
      console.log(`${req.method} request for ${req.url}`);
      res.end(css);
    });
  }

  else if (req.url.match(/.+\.js/gi)) {
    fs.readFile("./public/js/script.js", "UTF-8", function(err, js) {
      if (err) { logErr(err); }
      res.writeHead(200, {"Content-Type": "text/script"});
      console.log(`${req.method} request for ${req.url}`);
      res.end(js);
    });
  }

  else {
    fs.readFile("./public/404_Not_Found.html", "UTF-8", function(err, errHtml) {
      if (err) { logErr(err); }
      res.writeHead(404, {"Content-Type": "text/html"});
      console.log(`Invalid ${req.method} request for ${req.url}`);
      res.end(errHtml);
    });
  }
});



server.listen(3000);

console.log(`Server listening on port 3000`);
