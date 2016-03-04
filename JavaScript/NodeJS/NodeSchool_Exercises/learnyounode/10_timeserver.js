// jshint esversion: 6
var net = require("net");

function zeroFill(i) {
  return (i < 10 ? "0" : "") + i;
}

net.createServer(function(socket) {
  var now = new Date();
  var year = zeroFill(now.getFullYear());
  var month = zeroFill(now.getMonth()+1);
  var day = zeroFill(now.getDate());
  var hours = zeroFill(now.getHours());
  var minutes = zeroFill(now.getMinutes());
  socket.end(`${year}-${month}-${day} ${hours}:${minutes}`);
}).listen(process.argv[2]);
