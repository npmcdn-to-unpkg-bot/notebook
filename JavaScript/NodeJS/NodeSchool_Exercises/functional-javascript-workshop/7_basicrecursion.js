function reduce(arr, fn, initial) {

  return (function step(idx, value) {
      // End condition
      if (idx > arr.length - 1) { return value; }
      // Calculate and pass values to next step
      return step(idx + 1, fn(value, arr[idx], idx, arr))
  })(0, initial) // IIFE, initializes recursion values
}

module.exports = reduce;
