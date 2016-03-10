function getDependencies(tree, result) {
  // Initialize result and deps with default (fallback) values
  var result = result || [];
  var deps = tree.dependencies || {};
  // If there are no dependencies return empty array
  // (base-case)
  if (!tree.dependencies) { return []; }
  // Iterate through array of object keys
  Object.keys(deps).forEach(function(dep) {
    // Set depStr to the dependencyName@version
    var depStr = dep + "@" + deps[dep].version;
    // If depStr doesn't exist in result array
    if (result.indexOf(depStr) < 0) {
      // Append depStr
      result.push(depStr);
    }
    // Recursively call getDependencies() provided with
    // nested dependency tree and result array
    // (this handles nested objects)
    getDependencies(deps[dep], result);

  });
  // Sort the result before returning
  return result.sort();

}

module.exports = getDependencies;
