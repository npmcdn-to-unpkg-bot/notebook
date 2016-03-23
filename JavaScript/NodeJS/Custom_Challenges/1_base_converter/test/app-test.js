var expect = require("chai").expect;
var app = require("../app");

describe("binaryToDecimal()", function() {

  it("should convert simple binary to decimal value", function() {
    expect(app.binaryToDecimal("0")).to.equal(0);
    expect(app.binaryToDecimal("1")).to.equal(1);
    expect(app.binaryToDecimal("101")).to.equal(5);
    expect(app.binaryToDecimal("1000")).to.equal(8);
    expect(app.binaryToDecimal("1111")).to.equal(15);
    expect(app.binaryToDecimal("101011")).to.equal(43);
  });

  it("should convert large binary to decimal value", function () {
    expect(app.binaryToDecimal("10000000")).to.equal(128);
    expect(app.binaryToDecimal("10111101110110")).to.equal(12150);
    expect(app.binaryToDecimal("11111111111111111111")).to.equal(1048575);
    expect(app.binaryToDecimal("111010101011110111000")).to.equal(1923000);
    expect(app.binaryToDecimal("10000101010110111111000000110")).to.equal(279674374);
    expect(app.binaryToDecimal("111100001101010110111111000111000110")).to.equal(64648638918);
  });

  it("should throw an error for invalid entries", function() {
    expect(app.binaryToDecimal.bind(null, "pickle...")).to.throw("Invalid Parameters");
    expect(app.binaryToDecimal.bind(null, "90132")).to.throw("Invalid Parameters");
  });
});
