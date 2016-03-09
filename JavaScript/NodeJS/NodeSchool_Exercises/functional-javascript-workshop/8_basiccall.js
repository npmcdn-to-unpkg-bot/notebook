function duckCount() {
  // Filter through array-like arguments
  return Array.prototype.filter.call(arguments, (function(arg) {
    // Return only objects with direct prop 'quack'
    return Object.prototype.hasOwnProperty.call(arg, 'quack');
  })).length; // Return the length of the filtered array

}

module.exports = duckCount;
