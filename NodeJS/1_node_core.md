# 1. Node Core

### The Global Object

Much like the browser environment's _window_, node has a _global_ variable that it uses for global namespace.

```javascript
global.console.log('Hello World');
// Hello World
```

Running a script with node is as simple as entering _node_ followed by the script name:

```
$ node script.js
```

> **Note:** The '.js' extension is completely optional.

Every script file we make in Node is a module, giving any variables defined within them internal scope.

For the most part, Node can run any vanilla javascript functionality found within the constraints of the language (even ES6).

```javascript
var hello = "Hello World";
console.log(`All I can say is ${hello}`);
// All I can say is Hello World
```

Other global functionality includes being able to list the current working directory or file name.

```javascript
// Full Path: ~/javascript/testing.js
console.log(`Folder: ${__dirname}, File: ${__filename}`);
// Folder: ~/javascript, File: ~/javascript/testing.js
```

Using _require_ we can import other core and node modules.

```javascript
// Requiring the 'path' core module
var path = require("path");
// Using path to pluck basename from full path ~/javascript/testing.js
console.log(`Hello World from ${path.basename(__filename)}`);
// Hello World from testing.js
```

_____


### Argument Variables with process.argv

We can work with the current process instance and its arguments with _process.argv_.

```javascript
console.log(process.argv);
// [/path/to/node, /path/to/current/file, arg1, arg2, ...]
```
Because it is an array you can work with it like any javascript array.

```javascript
function grab(flag) {
  var index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index + 1];
}

var user = grab('--user');

console.log(`Hello ${user}, welcome to Node`);
```

And when we run the node application:

```
node app.js --user "Bill"
// Hello Bill, welcome to Node
```

> **Note:** This functionality can work great for allowing things like specifying a port, specific file, or path for our app to use.


_____


### Standard Input and Standard Output

Another feature of the process object is stdin and stdout, and they allow us to communicate with a process while it is running.

Although _console.log()_ will use the standard output, we can directly write to standard output:

```javascript
process.stdout.write("Hello ");
process.stdout.write("From\n")
process.stdout.write("World\n");
// Hello From
// World
//
```

> **Note:** Where _console.log()_ will write to stdout and include a newline, _process.stdout.write()_ does not include a newline.


We can use event listeners to set up standard input. In this case, we will use _.on('data', function (data){})_ listener which will fire a callback function when data is inputted to:

```javascript
process.stdout.write("\nEnter something: ");

process.stdin.on('data', function(data) {
  if (data.toString() === "exit") {
    // Exit the application
    process.exit();
  }
  else {
    process.stdout.write(`\nYou just entered: ${data.toString().trim()}\n`);
  }
});

// Listener when process is stopped
process.on('exit', function() {
  process.stdout.write(`\nNow Exiting...\n`);
});
```

The _.on('exit', function (){})_ will run the callback when the process is stopped or exited:

```
$ node app

Enter something: Hello World    // Waiting until we enter something
You just entered: Hello World

Enter something: exit     // runs process.exit() to close app
Now Exiting...    // trigger process.on("exit") listener
```

> **Note:** To force stop a process use <kbd>Ctrl</kbd>+<kbd>C</kbd> alternatively use the _process.exit()_.

_____


### Global timing functions

Just like in the browser environment, we can use timing functions to set intervals and timeouts:

```javascript
var waitTime = 3000;

console.log("Wait...");

setTimeout(function() {
  console.log("Done!");
}, waitTime);
```

Run the app:

```
$ node app

Waiting...    // 1, 2, 3
Done!
```


Alternatively we can set intervals:

```javascript
var intervalTime = 1000;
var currentTime = 0;

console.log("Wait...");

var timerInterval = setInterval(function() {
  currentTime += 1;
  console.log(`Current Time: ${currentTime} seconds...`);
}, intervalTime);

if (currentTime > 3) {
  clearInterval(timerInterval);
  console.log("done")
}
```

Run the app:

```
$ node app

Current Time: 1 seconds...
Current Time: 2 seconds...
Current Time: 3 seconds...
done
```
