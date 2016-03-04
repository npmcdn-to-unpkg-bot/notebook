var http = require("http");
var url = require("url");


var formatTime = function(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}


var formatUnix = function(date) {
  return {
    unixtime: date.getTime()
  };
}

var processRequest = function(urlPath, date) {
  var result = {};
  if (urlPath === "/api/parsetime") {
    result = formatTime(date);
  } else if (urlPath === "/api/unixtime") {
    result = formatUnix(date);
  }
  return result;
}

http.createServer(function(req, res) {
  var urlInfos = url.parse(req.url, true);
  var date = new Date(urlInfos.query.iso);
  var data = processRequest(urlInfos.pathname, date);

  if (data) {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(Number(process.argv[2]));
