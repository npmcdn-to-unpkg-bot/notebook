# The File System

The _fs_ module allows us to work with the local file system, performing all sorts of actions.

##### Quick Note About _Sync_ vs _Async_
In Node we have the option of using either synchronous or asynchronous functions. Where synchronous functions are great for quick processes at the beginning of an application running, otherwise they block and prevent further execution until finished. On the other hand, asynchronous functions have a callback function that will trigger when that process is completed.

Most of the time it is best practice in Node to use asynchronous functions.

> **Note:** Generally, _Sync_ is appended onto the function to make it synchronous and asynchronous is the default (i.e `readdir()` vs `readdirSync()`).


### Listing Directory Files

Using the _fs_ module it is very easy to list directory contents:

```javascript
var fs = require("fs");

// synchronous call to read directory
var files = fs.readdirSync('./lib');

console.log(files);
```

Run the app:

```
$ node app

['file.txt', 'file.md', 'dir3']
```


In an asynchronous implementation we would use the callback:

```javascript
var fs = require("fs");

// asynchronous call to read directory
fs.readdir('./lib', function(err, files) {
  if (err) {
    throw err;
  }
  console.log("Async call:\n");
  console.log(files);
});
```

Run the app:

```
$ node app

Async call:
['file.txt', 'file.md', 'dir3']
```

-----

### Reading Files

With the Node we can read the contents of both text and binary files. When implementing  _readfile()_ if we want to read a text file we need to pass in a text-encoding (like utf-8), otherwise it will read our file as binary giving us a buffer class:

```javascript
var fs = require("fs");

// synchronously read the file as utf-8
var contents = fs.readfileSync("/path/file.txt", "UTF-8");

console.log("contents");
```

Run the app:

```
$ node app

Synchronous read of content from file here...
```


In an asynchronous implementation we would use the callback:

```javascript
var fs = require("fs");

// Asynchronously read the file as utf-8
fs.readfile("/path/file.txt", "UTF-8", function(err, data) {
  if (err) {
    throw err;
  }

  console.log(data);
});
```

Run the app:

```
$ node app

Asynchronous read of content from file here...
```

-----

### Writing and Appending Files

Another feature of the file system module is to create new files, to write text or content to those files, or append text or content to an existing file.

We can create new files with the _writeFile()_
function, providing it with a filename, the contents for that file, and a callback that is invoked when the file is created.

```javascript
var fs = require("fs");

var md = `

Sample Markdown Title
=====================

Sample subtitle
---------------

* point
* point
* point

`;

// create new file sample.md with trimmed content
fs.writeFile("sample.md", md.trim(), function(err) {
  if (err) {
    throw err
  }

  console.log("File created");
});
```

Run the app:

```
$ node app

File Created
```


We can also append to files using the _appendFile()_ function, providing it with the name of the file, the content to append, and a callback function:

```javascript
var fs = require("fs");

// append to second arg to sample.md
fs.appendFile("sample.md", "This was appended..", function(err) {
  if (err) {
    throw err;
  }
  console.log("Content appended");
});
```

Run the app:

```
$ node app

Content appended
```

-----

### Directory Creation

In the _fs_ module there are functions that allow us to work with directories.

To make a directory we use _mkdir_, providing it with a name and a callback function. We can utilize _exists()_ to check if a file or folder already exists:

```javascript
var fs = require("fs");

// If 'lib' exists log message (synchronous)
if (fs.existsSync("lib") {
  console.log("Directory Already Exists!");
}
// Else make directory asynchronously
else {
  fs.mkdir("lib", function(err) {
    if (err) {
      throw err;
    }

    console.log("Directory Created...");
  });
}
```

Run the app:

```
$ node app

File Created...
```

-----

### Renaming and Removing Files

To rename and remove files we can implement the _fs_ module.

Using _rename()_ we can rename and/or move a file, providing it with first the file we want to rename and then new name for the file:

```javascript
// Asynchronously rename arg1 to arg2
fs.rename("./path/file/old", "./path/file/new", function (err) {
  if (err) {
    throw err;
  }

  console.log("./path/file/old is now: ./path/file/new");
});
```

Run the app:

```
$ node app

./path/file/old is now: ./path/file/new
```


Removing files using the _fs_ module can also be done similarly utilizing _unlink()_, providing it with a filename and a callback:

```javascript
// Asynchronously remove file
fs.unlink("filetodelete.txt", function (err) {
  if (err) {
    throw err;
  }

  console.log("Removed: filetodelete.txt");
});
```

Run the app:

```
$ node app

Removed: filetodelete.txt
```

-----

### Renaming and Removing Directories

We can similarly rename and remove directories the same way we would with files:

```javascript
var fs = require("fs");

// Asynchronously rename the old folder as the new folder
fs.rename("./old-folder/", "./new-folder/", function(err) {
  if (err) {
    throw err;
  }
  console.log("Folder Renamed to: ./new-folder/");
});
```

Run the app:

```
$ node app

Folder Renamed to: ./new-folder/
```


The _rmdir_ function will remove folders **only if they are empty**, otherwise you must first remove all files in that dir:

```javascript
var fs = require("fs");

// Asynchronously remove the dir
fs.rmdir("./rm-folder/", function(err) {
  if (err) {
    throw err;
  }
  console.log("Removed folder: /rm-folder/");
});
```

Run the app:

```
$ node app

Removed folder: /rm-folder/
```


And if the folder was not empty we must first delete all files within it:

```javascript
var fs = require("fs");

// Synchronously rm each file in the folder
fs.readdirSync("./logs").forEach(function(fileName) {

  fs.unlinkSync("./logs/" + fileName);

});

// Asynchronously remove the dir
fs.rmdir("./logs/", function(err) {
  if (err) {
    throw err;
  }
  console.log("Removed folder: /logs/");
});
```

Run the app:

```
$ node app

Removed folder: /logs/
```


-----

### Readable File Streams

Streams in Node are abstract implementations of the streams interface and give us a way of asynchronously handle continuous data flows.

_process.stdin_ and _process.stdout_ both use the stream interface.

Streams can be readable (_stdin_), writeable (_stdout_), or duplex (both). They can work with either binary data or text-encoded data.

Streams allow us to break our data into chunks, making them easier to implement and not requiring as much time before being able to do something with the data.

```javascript
var fs = require("fs");

// Create a read stream and assign it to var
// providing it with file to read and optional
// encoding
var stream = fs.createReadStream("./chat.log", "UTF-8");

// Set up data var to concat data chunks to
var data = "";

// Listen for first data event and then fire
// callback function
stream.once("data", function() {
  console.log("\n\nStarted Reading File\n\n");
});

// On data event run callback providing it with
// data chunk and logging the its length, then
// concat chunk to data var
stream.on("data", function(chunk) {

  process.stdout.write(` chunk: ${chunk.length} |`);

  data += chunk;
});

// When stream ends log 'finished' followed by
// the length of the data
stream.on("end", function() {
  console.log(`\nFinished Reading File: ${data.length} characters`);
});
```

Run the app:

```
$ node app


Started Reading File


 chunk: 65536 | chunk: 21461 |

Finished Reading File: 86997 characters
```


-----

### Writeable File Streams

Just like reading file streams we can write them as well in Node:

```javascript
var fs = require("fs");

// Create a write stream, providing it a file to write to
var stream = fs.createWriteStream("file.txt", )

// Write to stream to file
stream.write("\nStreamed this to file.txt\n");
// And again
stream.write("Another stream")
stream.write("and Another stream...")
```

Run the app:

```
$ node app

Streamed this to file.txt
Another steam and Another stream...
```
