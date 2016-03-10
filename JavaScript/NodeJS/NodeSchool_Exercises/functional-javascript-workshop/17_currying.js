function curryN(fn, n) {
  // if argument n is not provided re-assign n to fn's arity (fn.length)
  if (typeof n !== 'number') { n = fn.length };
  // Create a function that generates curry functions
  function genCurry(prev) {
    // Return a function that takes an arg
    return function(arg) {
      // Append arg (inner argument) to prev (outer argument)
      var args = prev.concat(arg);
      // Set recursive case
      if (args.length < n) { return genCurry(args) };
      // Base-case
      return fn.apply(this, args);
    }
  }
  // Evoke genCurry() passing in empty array (allowing for array methods)
  return genCurry([]);
}

module.exports = curryN;




/* Official Solution
function curryN(fn, n) {
    n = n || fn.length
    return function curriedN(arg) {
      if (n <= 1) return fn(arg)
      return curryN(fn.bind(this, arg), n - 1)
    }
  }

module.exports = curryN
*/
