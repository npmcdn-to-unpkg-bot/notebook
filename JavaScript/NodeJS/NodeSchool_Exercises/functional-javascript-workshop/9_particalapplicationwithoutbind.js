var slice = Array.prototype.slice;

// Wrapper function to set namespace
function logger(namespace) {
  // Inner function to partially apply args
  return function() {
    // Make an array copy of array-like arguments
    var args = slice.call(arguments);
    // Call console.log via apply w/ outer namespace (in array)
    // concat'd w/ partially applied inner arguments.
    console.log.apply(null, [namespace].concat(args));

  }
}

module.exports = logger;
