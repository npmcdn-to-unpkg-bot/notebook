var express = require("express");
var fs = require("fs");
var app = express();

app.get("/books", function(req, res) {

  var filename = process.argv[3];
  // Read file at specified path utf8 encoded
  fs.readFile(filename, 'utf8', function(err, data) {
    // Log error and return status code 500
    if (err) {
      console.error("There was an error reading the file!");
      return res.sendStatus(500);
    }
    // Parse the data into JSON format
    var content = JSON.parse(data);
    // Respond to client with JSON formatted data
    res.json(content);

  });
});

app.listen(process.argv[2]);
