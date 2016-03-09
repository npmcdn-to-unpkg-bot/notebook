function Spy(target, method) {
  // use an object so we can pass by reference, not value
  // i.e. we can return output, but update count from this scope
  var output = {count: 0};
  // Save original target method
  var targetMethod = target[method];
  // Re-assign target method
  target[method] = function() {
    // Increment count by 1
    output.count++;
    // Apply the original target method w/
    // appropriate this and arguments
    return targetMethod.apply(this, arguments);
  };
  // Output
  return output;
}

module.exports = Spy;
