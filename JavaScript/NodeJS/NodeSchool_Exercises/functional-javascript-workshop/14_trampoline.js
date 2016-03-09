function repeat(operation, num) {
  // Set recursion base case
  if (num <= 0) { return }
  // Call operation and recursively call
  // repeat decrementing by 1
  return function() {
    operation();
    return repeat(operation, --num);
  }
}


function trampoline(fn) {
  // While arg fn evaluates true and its type
  // is that of a function
  while (fn && typeof fn === 'function') {
    // Assign its returned value to a variable fn
    var fn = fn()
  }
  return fn;
}

// Setup outer function for repeat
module.exports = function(operation, num) {
  // Return the function, checking if it is still valid
  return trampoline(function() {
    // Call recursive function repeat
    return repeat(operation, num);
  });
}
