module.exports = function arrayMap(arr, fn, thisArg) {
  // Reduce appending output of fn(currItem) to accum array
  return arr.reduce(function(accum, currItem, index, arr) {
    accum.push(fn.call(thisArg, currItem, index, arr));
    return accum;
  }, []); // Set intial value of accum to empty array
};
