var path = require("path");
var express = require("express");
var app = express();

// Configure Express to use JADE template engine
app.set("view engine", "jade");
// Specify the path to JADE template files
app.set("views", process.argv[3]);

app.get("/home", function(req, res) {
  // Will respond with rendered template given
  // a template name and data (called locals)
  res.render("index", {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
