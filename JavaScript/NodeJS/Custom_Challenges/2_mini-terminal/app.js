var prompt = require("prompt");
// Custom Modules
var util = require("./lib/utilMod");
var v8 = require("./lib/v8Mod");
var proc = require("./lib/processMod");

prompt.start();

function ask() {
  var commandOptions = {
    log: util.tsLog,
    inspect: util.objLayout,
    totalHeap: v8.totalHeap,
    execHeap: v8.execHeapSize,
    totalPhysical: v8.totalPhysical,
    totalAvailable: v8.totalAvailable,
    usedHeap: v8.usedHeap,
    heapLimit: v8.heapLimit,
    v8Actions: v8.v8Actions
  };
  var arg;
  prompt.get(['input'], function(err, command) {
    var input = (command.input).trim();
    // Handle input errors
    if (err) { console.error(err); }
    // Quit if 'exit' is entered
    else if ((input).toLowerCase() === 'exit') {
      process.exit();
    }
    // Handle util module
    else if (/^log\(".+"\)|log\('.+'\)$/g.test(input)) {
      arg = /^log\("(.+)"\)|log\('(.+)'\)$/g.exec(input)[1]
                || /^log\("(.+)"\)|log\('(.+)'\)$/g.exec(input)[2];
      commandOptions.log(arg);
    }
    else if (/^inspect\(.+\)|inspect\(.+\)$/g.test(input)) {
      arg = /^inspect\((.+)\)|inspect\((.+)\)$/g.exec(input)[1]
                || /^inspect\((.+)\)|inspect\((.+)\)$/g.exec(input)[2];
      console.log(commandOptions.inspect(arg));
    }
    // Handle process module
    // pending...
    
    else {
      // Handle v8 module
      switch (input) {
        case "totalHeap":
          console.log(commandOptions.totalHeap());
          break;
        case "execHeap":
          console.log(commandOptions.execHeap());
          break;
        case "totalPhysical":
          console.log(commandOptions.totalPhysical());
          break;
        case "totalAvailable":
          console.log(commandOptions.totalAvailable());
          break;
        case "usedHeap":
          console.log(commandOptions.usedHeap());
          break;
        case "heapLimit":
          console.log(commandOptions.heapLimit());
          break;
        case "v8Actions":
          console.log(commandOptions.v8Actions());
          break;
        default:
          console.log("invalid operation...");
          break;
      }
    }
    ask();
  });
}

ask();
