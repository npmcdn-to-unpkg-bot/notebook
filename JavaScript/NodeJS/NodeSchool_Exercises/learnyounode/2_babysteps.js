/* jshint esversion: 6 */
// A function that takes an array of arguments
var addArgs = (argArray) => {
  var i, sum = 0;
  for (i = 2; i < argArray.length; i++) {
    // If arg (after converted) is a number type
    // add the number value to the sum
    if (typeof(Number(argArray[i])) === 'number') {
      sum += Number(argArray[i]);
    }
    else {
      // Otherwise return the error message string
      return "Not valid arguments, numbers only";
    }
  }
  return sum;
};
// Log the above function provided the
// commandline arguments (process.argv)
console.log(addArgs(process.argv));
