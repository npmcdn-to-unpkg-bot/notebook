"use strict";

function binaryToDecimal(binValue) {
  if (/[^01]/g.test(binValue) !== true) {
    // Use parseInt to convert binary (base2) to number
    let decimal = Number.parseInt(binValue, 2);
    return decimal;
  } else {
    // Handle errors here...
    throw new Error("Invalid Parameters");
  }
}

function decimalToBinary(decValue) {
  if (/[^0-9]/g.test(decValue) !== true) {
    // Parse to integer (base 10) if string
    if (typeof(decValue) === "string") {
      decValue = Number.parseInt(decValue, 10);
    }
    // Convert decimal to binary with bitwise shift
    let binary = (decValue >>> 0).toString(2);
    return Number(binary);
  }
}

module.exports = {
  binaryToDecimal: binaryToDecimal,
  decimalToBinary: decimalToBinary
};
