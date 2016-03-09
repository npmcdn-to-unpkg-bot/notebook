function repeat(operation, num) {
  // End recursion if statement true
  if (num <= 0) { return }
  // Run the operation function
  operation();
  // Every 10 iterations release control
  // 10 is arbitrary
  if (num % 10 === 0) {
    setTimeout(function() {
      repeat(operation, --num);
    });
  } else {
  repeat(operation, --num);
  }

}

module.exports = repeat;

// Not an original answer
