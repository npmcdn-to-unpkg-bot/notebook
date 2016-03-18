var test = require("tape");
// Import custom module
var repeatCallback = require(process.argv[2]);
// Set up test suite with callback
test("Test each invocation of repeatCallback(n, cb)", function(t) {
  // Set up expected times callback will be evoked
  t.plan(3);
  repeatCallback(3, function() {
    // Count a evocation of callback function
    t.pass('repeatCallback called');
  });
});


/*
Official Solution:
==================
var test = require('tape')
var repeatCallback = require(process.argv[2])

test('repeatCallback', function (t) {
  t.plan(4)
  repeatCallback(4, function () {
   t.pass('callback called')
 })
})
*/
