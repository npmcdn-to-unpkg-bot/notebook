function loadUsers(userIds, load, done) {
  // initialize users and count variables
  var users = [], count = 0;
  // For each userId in userIds array
  userIds.forEach(function(id, idx) {
    // run load function passing in id and
    // a callback function(data)
    load(id, function(data) {
      // Set the indexed array element to the data
      users[idx] = data;
      // Increment the count by one
      ++count;
      // Once count is equal to the length of userIds array
      // return the done() function passing in new users array
      if (count === userIds.length) { return done(users); }
    })
  });
}

module.exports = loadUsers;
