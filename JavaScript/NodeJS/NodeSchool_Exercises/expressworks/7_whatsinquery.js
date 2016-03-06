var express = require("express");
var app = express();

app.get("/search", function(req, res) {
  // Get the url query from req object
  var query = req.query;
  // Respond w/ query in JSON format
  res.send(req.query);
  res.end();

});

app.listen(process.argv[2]);
