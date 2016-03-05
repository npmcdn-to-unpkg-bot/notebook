// Require express module
var express = require("express");
// Assign returned express() value to app
var app = express();
// Create a route for GET  "/home"
app.get("/home", function(req, res) {
  // End response/Send string
  res.end("Hello World!");

});
// Listen on specified port number
app.listen(process.argv[2]);
