var feedCat = require(process.argv[2]);
var test = require("tape");
// Set up test suite with callback
test("Should test for errors when feeding felines chocolate", function(t) {
  // Set up normal function behavior
  t.ok(feedCat("MeowMix") === "yum", "Should return 'yum' when fed MeowMix");
  // Fail test only if error not thrown when chocolate fed to cats
  t.throws(feedCat.bind(null, "chocolate"));
  // End testing
  t.end();
});


/*
Official Solution:
==================

var test = require('tape')
var feedCat = require(process.argv[2])

test('cat feeding', function (t) {
 t.plan(2)
 t.equal(feedCat('food'), 'yum')
 t.throws(feedCat.bind(null, 'chocolate'))
})
*/
