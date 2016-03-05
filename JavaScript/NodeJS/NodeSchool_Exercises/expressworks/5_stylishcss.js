var express = require("express");
// Require stylus module
var stylus = require("stylus");
var app = express();
// Append stylus middleware provided with path
// to dir w/ main.styl
app.use(stylus.middleware(process.argv[3]));

app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);
