// Require tape module for testing
var test = require("tape");
// Import custom module
var fancify = require(process.argv[2]);
// Set up test suite w/ description and callback
test("Checks fancify with three types of input", function(t) {
  // Write tape tests, including descriptions of tests
  t.ok(fancify("Testing") === "~*~Testing~*~", "Should fancify the string");
  t.ok(fancify("Testing", true) === "~*~TESTING~*~", "Should return all caps");
  t.ok(fancify("Testing", false, "&") === "~&~Testing~&~", "Should customize symbol.");
  // End tape testing
  t.end()
});


/*
Official Solution:
==================
var test = require('tape')
var fancify = require(process.argv[2])

test('fancify', function (t) {
  t.equal(fancify('Wat'), '~*~Wat~*~', 'Wraps a string in ~*~')
  t.equal(fancify('Wat', true), '~*~WAT~*~', 'Optionally makes it allcaps')
  t.equal(fancify('Wat', false, '%'), '~%~Wat~%~', 'Optionally allows to set the character')
  t.end()
})
*/
