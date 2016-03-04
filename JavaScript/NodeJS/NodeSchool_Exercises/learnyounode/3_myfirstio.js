/* jshint esversion: 6 */
// Import the fs module
var fs = require("fs");
// Assign a variable to the value of a file read
// read synchronously and then converted from Buffer
// to string.
var readFile = fs.readFileSync(process.argv[2]).toString();
// Reassign the value of readFile to an array split
// on every new line.
readFile = readFile.split("\n");
// Log the length of the array (minus the last space)
console.log(readFile.length - 1);
