var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// Use body-parser to parse urlencoded req
// and place it nicely on the res object
app.use(bodyParser.urlencoded({extended: false}));

app.post("/form", function(req, res) {
  // Split parsed res.body into array, reverse, and join
  var message = req.body.str.split("").reverse().join("");
  // Log reversed message
  res.end(message);

});

app.listen(process.argv[2]);
