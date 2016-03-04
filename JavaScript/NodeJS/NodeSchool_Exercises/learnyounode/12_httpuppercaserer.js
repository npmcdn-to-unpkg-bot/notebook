var http = require("http");
var map = require("through2-map");

http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});

  res.on("error", function(err) {
    return console.error(err);
  });

  if (req.method === "POST") {
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }

}).listen(Number(process.argv[2]));
