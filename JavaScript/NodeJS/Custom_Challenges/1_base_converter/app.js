var readline = require("readline");

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

// Grab flag values
var options = {
  bd: {
    name: "Binary To Decimal",
    conversion: function(binValue) {
      return binaryToDecimal(binValue);
    }
  },
  db: {
    name: "Decimal To Binary",
    conversion: function(decValue) {
      return decimalToBinary(decValue);
    }
  },
  hd: {
    name: "Hexadecimal to Decimal",
    conversion: function(hexValue) {
      return hexToDecimal(hexValue);
    }
  },
  dh: {
    name: "Decimal to Hexadecimal",
    conversion: function(decValue) {
      return decimalToHex(decValue);
    }
  },
  bh: {
    name: "Binary to Hexadecimal",
    conversion: function(binValue) {
      return binaryToHex(binValue);
    }
  },
  hb: {
    name: "Hexadecimal to Binary",
    conversion: function(hexValue) {
      return hexToBinary(hexValue);
    }
  }
};

var paramRE = new RegExp('(?:-){1}([bdh]{2})(?:\s)*$', 'g');

// parse format flags
var format = process.argv[2];
var initValue;

// set up rl interface
var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("Input:\t");
rl.prompt();

rl.on('line', function(value) {
  if (format === undefined) {
    throw ("Error: invalid format flag");
  } else {
    initValue = value;
    console.log(`Value: ${initValue} - Format: ${options[format].name}`);
  }
  rl.close();
});

rl.on("close", function() {
  try {
    var output = options[format].conversion(initValue);
    console.log(`Output:\t${output}`);
  } catch(e) {
    throw ("Invalid input value...");
  }
  process.exit();
});

module.exports = {
  binaryToDecimal: binaryToDecimal,
  decimalToBinary: decimalToBinary,
  hexToDecimal: hexToDecimal,
  decimalToHex: decimalToHex,
  binaryToHex: binaryToHex,
  hexToBinary: hexToBinary
};
