var readline = require("readline");
var colors = require("colors/safe");
// Custom Modules
var util = require("./lib/utilMod");
var v8 = require("./lib/v8Mod");
var help = require("./lib/helpMod");

var rl = readline.createInterface(process.stdin, process.stdout);

var commandOptions = {
  log: util.tsLog,
  inspect: util.objLayout,
  totalHeap: v8.totalHeap,
  execHeap: v8.execHeapSize,
  totalPhysical: v8.totalPhysical,
  totalAvailable: v8.totalAvailable,
  usedHeap: v8.usedHeap,
  heapLimit: v8.heapLimit,
  help: help
};

// Set prompt
rl.setPrompt("> ");
// Display initial prompt
rl.prompt();

rl.on('line', function(answer){
  var input = answer.trim();
  var arg;
  // Quit if 'exit' is entered
  if ((input).toLowerCase() === 'exit') {
    rl.close();
  }
  // handle empty newline
  else if (input === "") {
    console.log("");
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

  else if (input.toLowerCase() === "help") {
    console.log(commandOptions.help());
  }

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
  // loop prompt
  rl.prompt();
});

rl.on('close', function() {
  console.log(colors.grey("Exiting..."));
  process.exit();
});
