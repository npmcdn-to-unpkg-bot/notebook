var fs = require("fs");
var path = require("path");

function extReader(dirname, extension, callback) {
  fs.readdir(dirname, function(err, files) {

    if (err) {
      return callback(err);
    }
    var extFiles = files.filter(function(file) {
      return (path.extname(file) === "." + extension);
    });

      callback(null, extFiles);
  });
}

module.exports = extReader;
