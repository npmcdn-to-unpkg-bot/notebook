var concat = require("concat-stream");

process.stdin.pipe(concat(function (body) {
  var reversedBody = body.toString().split("").reverse().join("");
  console.log(reversedBody);
}));

// // Here's the reference solution:
//
// var concat = require('concat-stream');
//
// process.stdin.pipe(concat(function (src) {
//     var s = src.toString().split('').reverse().join('');
//     console.log(s);
// }));
