"use strict";

const invalidErr = new Error("Invalid Parameters");

function binaryToDecimal(binValue) {
  if (/[^01]/g.test(binValue) !== true) {
    // Use parseInt to convert binary (base2) to number
    let decimal = Number.parseInt(binValue, 2);
    return decimal;
  } else {
    // Handle errors here...
    throw invalidErr;
  }
}

function decimalToBinary(decValue) {
  if (/[^0-9]/g.test(decValue) !== true) {
    // Parse to integer (base 10) if string
    if (typeof(decValue) === "string") {
      decValue = Number.parseInt(decValue, 10);
    }

    if (Number.isSafeInteger(decValue)) {
      // Convert decimal to binary with bitwise shift
      let binary = (decValue >>> 0).toString(2);
      return Number(binary);
    } else {
      throw new Error("Range Error - Unsafe Integer");
    }
  } else {
    throw invalidErr;
  }
}

function hexToDecimal(hexValue) {
  if (/^-?[0-9a-fA-F]+$/g.test(hexValue)){
    var decimal = Number.parseInt(hexValue, 16);
    return decimal;
  } else {
    throw invalidErr;
  }
}

function decimalToHex(decValue) {
  if (/^\-?[0-9]+(\.[0-9]+)?$/g.test(decValue)) {
    decValue = Number(decValue);
    var hexadecimal = decValue.toString(16);
    return hexadecimal;
  } else {
    throw invalidErr;
  }
}

// binary to hexadecimal

// hexadecimal to binary

module.exports = {
  binaryToDecimal: binaryToDecimal,
  decimalToBinary: decimalToBinary,
  hexToDecimal: hexToDecimal,
  decimalToHex: decimalToHex
};
