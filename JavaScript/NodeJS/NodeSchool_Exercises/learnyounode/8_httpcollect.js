var http = require("http");
var urlPath = process.argv[2];

http.get(urlPath, function(response) {
  var responseBody = "";
  response.on("error", function(err) {
    console.error(err);
  });
  response.setEncoding("utf8");
  response.on("data", function(data) {
    responseBody += data;
  });
  response.on("end", function() {
    console.log(responseBody.length);
    console.log(responseBody);
  });

});
