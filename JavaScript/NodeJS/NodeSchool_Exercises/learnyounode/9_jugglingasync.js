var http = require("http");

var outputArr = [];
var counter = 0;

function logResponse () {
  outputArr.forEach(function(item) {
    console.log(item);
  });
}

function getRequest(index) {
  http.get(process.argv[2 + index], function(response) {

    response.on("error", function (err) {
      console.error("There was an error: " + err);
    });

    response.setEncoding("utf8");

    var responseBody = "";

    response.on("data", function(chunk) {
      responseBody += chunk;
    });

    response.on("end", function() {
      outputArr[index] = (responseBody);
      counter++;

      if (counter === 3) {
        logResponse();
      }
    });
  });
}

for (var i = 0; i < 3; i++) {
  getRequest(i);
}
