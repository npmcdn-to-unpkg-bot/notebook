// Import the file system and path modules
var fs = require("fs");
var path = require("path");
// Use the fs.readdir method provided with a dir path
// and a callback function
fs.readdir(process.argv[2], function(err, files) {
  if (err) {
    return console.error(err);
  }
  // For each file listed in the files array
  // if the extension name === the second
  // provided CL argument (preceeded w/ ".")
  files.forEach(function(file) {
    if (path.extname(file) === "." + process.argv[3]) {
      console.log(file);
    }
  });
});
