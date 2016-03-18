// Import assert testing module
var assert = require("assert");
// Load custom module
var isCoolNumber = require(process.argv[2]);
// Tests if value is truthy
assert.ok(isCoolNumber(42), "Should return true when 42 is passed in");


/*
Official Solution:
==================
var isCoolNumber = require(process.argv[2])
var assert = require('assert')
assert(isCoolNumber(42))
*/
