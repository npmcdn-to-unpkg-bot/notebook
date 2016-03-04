var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {

  res.on("error", function (err) {
    return console.error(err);
  });

  res.writeHead(200, {"Content-Type": "text/plain"});

  fs.createReadStream(process.argv[3]).pipe(res);

}).listen(Number(process.argv[2]));
