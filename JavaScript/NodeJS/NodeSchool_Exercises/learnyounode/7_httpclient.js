var http = require("http");
var urlPath = process.argv[2];
http.get(urlPath, function(response) {
  response.on("error", function (err) {
    return console.error(err);
  });

  response.setEncoding("utf8");

  response.on("data", function(data) {
    console.log(data);
  });
});
