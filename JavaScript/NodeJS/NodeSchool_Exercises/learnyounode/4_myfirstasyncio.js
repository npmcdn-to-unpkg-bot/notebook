// Import the file system module
var fs = require("fs");

// Use the asynchronous readFile method of fs
// providing it with a file (CL arguement),
// charset encoding (utf8), and a callback.
fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (err) {
    return console.error(err);
  }

  var content = data.split("\n");

  console.log(content.length - 1);

});
