var prompt = require("prompt");
var colors = require("colors/safe");

"use strict";

// Functions for number conversion

const invalidErr = new Error("Invalid Parameters");
const rangeErr = new Error("Range Error - Unsafe Integer");

function binaryToDecimal(binValue) {
  if (/[^01]/g.test(binValue) !== true) {
    // Use parseInt to convert binary (base2) to number
    var decimal = Number.parseInt(binValue, 2);
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
      var binary = (decValue >>> 0).toString(2);
      return Number(binary);
    } else {
      throw rangeErr;
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

function binaryToHex(binValue) {
  // Convert binary to decimal
  var decValue = binaryToDecimal(binValue);
  // Convert decimal to hex
  return decimalToHex(decValue);
}


function hexToBinary(hexValue) {
  // Convert hex to decimal
  var decValue = hexToDecimal(hexValue);
  // Convert decimal to binary
  if (!Number.isSafeInteger(decValue)) { throw rangeErr; }
  return decimalToBinary(decValue);
}


// Set conversion options
var options = {
  bindec: {
    label: "Binary to Decimal",
    convert: function(value) {
      return binaryToDecimal(value);
    }
  },
  decbin: {
    label: "Decimal to Binary",
    convert: function(value) {
      return decimalToBinary(value);
    }
  },
  hexdec: {
    label: "Hexadecimal to Decimal",
    convert: function(value) {
      return hexToDecimal(value);
    }
  },
  dechex: {
    label: "Decimal to Hexadecimal",
    convert: function(value) {
      return decimalToHex(value);
    }
  },
  binhex: {
    label: "Binary to Hexadecimal",
    convert: function(value) {
      return binaryToHex(value);
    }
  },
  hexbin: {
    label: "Hexadecimal to Binary",
    convert: function(value) {
      return hexToBinary(value);
    }
  }
};

// Set up prompt schema
var schema = {
  properties: {
    formatA: {
      description: "From",
      pattern: /^hex|bin|dec|exit$/i,
      message: `Must be '${colors.yellow("hex")}', '${colors.yellow("bin")}', or '${colors.yellow("dec")}' ${colors.grey("('exit' to quit)")}`,
      required: true,
      before: function(value) {
        var v = value.toLowerCase();
        if (v === 'exit') { process.exit(); }
        else { return v; }
      }
    },
    formatB: {
      description: "To",
      pattern: /^hex|bin|dec|exit$/i,
      message: `Must be '${colors.yellow("hex")}', '${colors.yellow("bin")}', or '${colors.yellow("dec")}' ${colors.grey("('exit' to quit)")}`,
      required: true,
      before: function(value) {
        var v = value.toLowerCase();
        if (v === 'exit') { process.exit(); }
        else { return v; }
      }
    },
    initValue: {
      description: "Value",
      pattern: /[0-9a-f]+|exit/i,
      required: true,
      message: `Must be a valid number ${colors.grey("('exit' to quit)")}`,
      before: function(value) {
        var v = value.toLowerCase();
        if (v === 'exit') { process.exit(); }
        else { return v; }
      }
    }
  }
};


// Customize prompt
prompt.message = "";
prompt.delimiter = " >";



// Welcome message
console.log((colors.blue(`
                          ===============
                           Base-Converter
                          ===============

              Convert to and from Binary, Hex, and Decimal.
              Valid formats: 'bin', 'hex', 'dec'
                                           ('exit' to quit)
  `)).trim());


// Start prompt
prompt.start();

// Function to handle errors
function onErr(err) {
  console.log(colors.red(err));
  ask();
}

// Get schema property values
function ask() {
  prompt.get(schema, function (err, result) {
    // Handle errors upon getting info
    if (err) { return onErr(err); }
    // Handle identical formats
    else if (result.formatA === result.formatB) {
      console.log(colors.yellow("unchanged value..."));
    }
    // Convert and output accordingly
    else {
      // Try Conversion, passing handling errors with onErr()
      try {
        var selection = result.formatA + result.formatB;
        var selectionLabel = options[selection].label;
        var inputValue = result.initValue;
        var outputValue = options[selection].convert(inputValue);
        var dashLine = '-'.repeat(12+selectionLabel.length);
      } catch (conversionError) {
        return onErr(conversionError);
      }
      // log result
      console.log(colors.cyan(`\n\t${dashLine}\n\tConversion: ${selectionLabel}\n\t${dashLine}\n`));
      console.log(colors.green(`\tOutput: ${outputValue}\n`));
      console.log(colors.grey(("\t\t\t('exit' to quit)")));
    }
    // Repeat prompt
    ask();
  });
}
// initialize prompt
ask();


// For testing
module.exports = {
  binaryToDecimal: binaryToDecimal,
  decimalToBinary: decimalToBinary,
  hexToDecimal: hexToDecimal,
  decimalToHex: decimalToHex,
  binaryToHex: binaryToHex,
  hexToBinary: hexToBinary
};
