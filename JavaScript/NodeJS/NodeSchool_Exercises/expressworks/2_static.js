var express = require("express");
var path = require("path");
var app = express();

// app.use() to attach express.static middle-ware,
// set to serve from either a specified path (arg)
// or the joined public folder path
app.use(express.static(process.argv[3] || path.join(__dirname, "public")));

app.listen(process.argv[2]);
