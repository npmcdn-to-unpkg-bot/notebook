"use strict";

function binaryToDecimal(binValue) {
  if (/[^01]/.test(binValue) !== true) {
    // Use parseInt to convert binary (base2) to number
    let decimal = Number.parseInt(binValue, 2);
    return decimal;
  } else {
    // Handle errors here...
    throw new Error("Invalid Parameters");
  }
}

module.exports = {
  binaryToDecimal: binaryToDecimal
};
