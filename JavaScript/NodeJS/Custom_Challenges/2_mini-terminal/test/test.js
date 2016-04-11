var expect = require("chai").expect();
// Custom Modules
var proc = require("../lib/processMod");
var util = require("../lib/utilMod");
var v8 = require("../lib/v8Mod");

describe("process custom module", function() {
  it("should execute synchronously execute a unix command", function() {
    expect(proc.cpe("ls")).to.equal("");
  });
});
