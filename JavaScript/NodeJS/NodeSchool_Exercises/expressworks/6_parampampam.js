var express = require("express");
// Require cryto module
var cryto = require("crypto");
var app = express();

// Create route for PUT requests w/ given id param
app.put("/message/:id", function(req, res) {
  // Create a sha1 hash w/ cryto
  var hash = cryto.createHash("sha1")
             // update the sha1 to include the date and id param
             .update(new Date().toDateString() + req.params.id)
             // exports the hash in hex format
             .digest('hex');
  // End response and send hash
  res.end(hash);
});

app.listen(process.argv[2]);


// Alternate method w/ middle-ware:
// --------------------------------
// // Add middle-ware to request object
// app.param('id', function(req, res, next, id) {
//   // place the 'id' param on the request object
//   req.id = id;
//   // move on to the next app method(middle-ware)
//   next();
// });
// // Create route for PUT requests w/ given id param
// app.put("/message/:id", function(req, res) {
//   // Create a sha1 hash w/ cryto
//   var hash = cryto.createHash("sha1")
//              // update the sha1 to include the date and id param
//              .update(new Date().toDateString() + req.id)
//              // exports the hash in hex format
//              .digest('hex');
//   // End response and send hash
//   res.end(hash);
// });
//
// app.listen(process.argv[2]);
