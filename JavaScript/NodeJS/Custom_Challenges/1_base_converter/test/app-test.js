var expect = require("chai").expect;
var app = require("../app");

describe("binaryToDecimal()", function() {

  it("should convert simple binary to decimal value", function() {
    expect(app.binaryToDecimal("0")).to.equal(0);
    expect(app.binaryToDecimal("1")).to.equal(1);
    expect(app.binaryToDecimal("0100")).to.equal(4);
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
    expect(app.binaryToDecimal.bind(null, "001001a")).to.throw("Invalid Parameters");
    expect(app.binaryToDecimal.bind(null, "10.01")).to.throw("Invalid Parameters");
    expect(app.binaryToDecimal.bind(null, "-10")).to.throw("Invalid Parameters");
    expect(app.binaryToDecimal.bind(null, "+010")).to.throw("Invalid Parameters");
    expect(app.binaryToDecimal.bind(null, "3 is a the maginc number...1")).to.throw("Invalid Parameters");
  });
});

describe("decimalToBinary()", function() {

  it("should convert simple decimal values into binary", function() {
    expect(app.decimalToBinary("10")).to.equal(1010);
    expect(app.decimalToBinary("550")).to.equal(1000100110);
    expect(app.decimalToBinary("13")).to.equal(1101);
    expect(app.decimalToBinary("64")).to.equal(1000000);
    expect(app.decimalToBinary("47")).to.equal(101111);
  });

  it("should convert large decimal values to binary", function() {
    expect(app.decimalToBinary("10000")).to.equal(10011100010000);
    expect(app.decimalToBinary("789335")).to.equal(11000000101101010111);
    expect(app.decimalToBinary("1213901985")).to.equal(1001000010110101010110010100001);
    expect(app.decimalToBinary("928472653")).to.equal(110111010101110101111001001101);
    expect(app.decimalToBinary("620382042")).to.equal(100100111110100100011101011010);
  });

  it("should throw an error for invalid entries", function() {
    expect(app.decimalToBinary.bind(null, Math.pow(2, 53))).to.throw("Range Error - Unsafe Integer");
    expect(app.decimalToBinary.bind(null, "820537523234037927940")).to.throw("Range Error - Unsafe Integer");
    expect(app.decimalToBinary.bind(null, "102205327523234037927940")).to.throw("Range Error - Unsafe Integer");
    expect(app.decimalToBinary.bind(null, Math.pow(2, 80))).to.throw("Invalid Parameters");
    expect(app.decimalToBinary.bind(null, "some random junk")).to.throw("Invalid Parameters");
    expect(app.decimalToBinary.bind(null, "1239.21231")).to.throw("Invalid Parameters");
  });
});

describe("hexToDecimal()", function() {

  it("should convert hexadecimal to decimal notation", function() {
    expect(app.hexToDecimal("d")).to.equal(13);
    expect(app.hexToDecimal("e9")).to.equal(233);
    expect(app.hexToDecimal("10")).to.equal(16);
    expect(app.hexToDecimal("A9")).to.equal(169);
    expect(app.hexToDecimal("3c")).to.equal(60);
    expect(app.hexToDecimal("11F")).to.equal(287);
  });

  it("should convert negative hexadecimal to decimal", function () {
    expect(app.hexToDecimal("-Bb")).to.equal(-187);
    expect(app.hexToDecimal("-F438")).to.equal(-62520);
    expect(app.hexToDecimal("-90023faa")).to.equal(-2416066474);
    expect(app.hexToDecimal("-add33")).to.equal(-711987);
    expect(app.hexToDecimal("-4311beca")).to.equal(-1125236426);
    expect(app.hexToDecimal("-802FAab")).to.equal(-134412971);
  });

  it("should handle very large hexadecimal values", function() {
    expect(app.hexToDecimal("FF490")).to.equal(1045648);
    expect(app.hexToDecimal("2fffffaff4ffffff")).to.equal(3458764170038607871);
    expect(app.hexToDecimal("3f5fffaff4f2f0f0")).to.equal(4566649678370894064);
    expect(app.hexToDecimal("98ffaff43331100")).to.equal(689045242261999872);
    expect(app.hexToDecimal("76ffaff43331100")).to.equal(535922854931403008);
    expect(app.hexToDecimal("7fffffffffffffff")).to.equal(9223372036854775807);
  });

  it("should throw an error for invalid input", function() {
    expect(app.hexToDecimal.bind(null, "fabulous50")).to.throw("Invalid Parameters");
    expect(app.hexToDecimal.bind(null, "-190bas")).to.throw("Invalid Parameters");
    expect(app.hexToDecimal.bind(null, "-FAbg")).to.throw("Invalid Parameters");
    expect(app.hexToDecimal.bind(null, "7ffffffvfffffffff")).to.throw("Invalid Parameters");
    expect(app.hexToDecimal.bind(null, "a;fkajs;ifr;..")).to.throw("Invalid Parameters");
    expect(app.hexToDecimal.bind(null, "+008")).to.throw("Invalid Parameters");
  });
});

describe("decimalToHex()", function() {

  it("should convert decimal to hexadecimal values", function() {
    expect(app.decimalToHex("10")).to.equal("a");
    expect(app.decimalToHex("145")).to.equal("91");
    expect(app.decimalToHex("194")).to.equal("c2");
    expect(app.decimalToHex("1023")).to.equal("3ff");
    expect(app.decimalToHex("9573")).to.equal("2565");
    expect(app.decimalToHex("193282")).to.equal("2f302");
  });

  it("should handle large numbers", function() {
    expect(app.decimalToHex("809803241")).to.equal("30449de9");
    expect(app.decimalToHex("789345793")).to.equal("2f0c7601");
    expect(app.decimalToHex("57385722964434")).to.equal("343127a1e9d2");
    expect(app.decimalToHex("90458630495682")).to.equal("52458a899dc2");
    expect(app.decimalToHex("6845763994400")).to.equal("639e754c320");
    expect(app.decimalToHex("6930222790332")).to.equal("64d9177b6bc");
  });

  it("should convert negative decimal to hexadecimal", function() {
    expect(app.decimalToHex("-560")).to.equal("-230");
    expect(app.decimalToHex("-7250")).to.equal("-1c52");
    expect(app.decimalToHex("-89532")).to.equal("-15dbc");
    expect(app.decimalToHex("-100345")).to.equal("-187f9");
    expect(app.decimalToHex("-9324665")).to.equal("-8e4879");
    expect(app.decimalToHex("-45211307798")).to.equal("-a86cdcf16");
  });

  it("should throw an error for invalid input", function() {
    expect(app.decimalToHex.bind(null, "monkey-wrench")).to.throw("Invalid Parameter");
    expect(app.decimalToHex.bind(null, "ff4aa")).to.throw("Invalid Parameter");
    expect(app.decimalToHex.bind(null, "--2930.778")).to.throw("Invalid Parameter");
    expect(app.decimalToHex.bind(null, "+0993")).to.throw("Invalid Parameter");
    expect(app.decimalToHex.bind(null, "70people_?")).to.throw("Invalid Parameter");
    expect(app.decimalToHex.bind(null, "70.00.1")).to.throw("Invalid Parameter");
  });
});

describe("binaryToHex()", function() {

  it("should convert binary to hexadecimal values", function() {
    expect(app.binaryToHex("10")).to.equal("2");
    expect(app.binaryToHex("10011")).to.equal("13");
    expect(app.binaryToHex("11100011")).to.equal("e3");
    expect(app.binaryToHex("100011100011")).to.equal("8e3");
    expect(app.binaryToHex("10000011010110100011")).to.equal("835a3");
    expect(app.binaryToHex("1011000011010110100110100011")).to.equal("b0d69a3");
  });

});
