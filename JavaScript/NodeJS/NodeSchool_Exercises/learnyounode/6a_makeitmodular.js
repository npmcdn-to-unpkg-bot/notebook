var extReader = require("./6b_module.js");
var folder = process.argv[2];
var extension = process.argv[3];

extReader(folder, extension, function(err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function(file) {
    console.log(file);
  });
});
