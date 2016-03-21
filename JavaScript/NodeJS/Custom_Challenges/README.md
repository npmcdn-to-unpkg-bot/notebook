# Node Custom Challenges


## Overview

Laid out below are some custom challenges that aim to get one familiar with Node through building applications. Each challenge touches on a fundamental technology apart of the NodeJS community. These challenges are meant to be mini-projects, meaning they should take **at-most** a day to complete.

> Although not necessary for all projects, extra props are given if each challenge is completed through Test-Driven Development (TDD) or any of the incorporated functionality in challenge 8.



## Challenge 1: Number Format Converter

Write a script that, given two flags as a specifier (_from=_ and _to=_), will take in user input on stdin and return the converted number to the format specified in the flag (integer/hex/binary). Test for invalid flags and invalid input.

Example:

```
$ node convert --from=binary --to=hex
Enter a valid number: 1010110         // User enters Value in binary
Value => 54                           // Value returned in hexadecimal
```

> Functionality to incorporate: process.argv, stdin/stdout.



## Challenge 2: Mini-terminal

Create a node script that when run, will bring the user within a terminal-like environment. Use the _readline module_ to read user input and the _events module_ to trigger commands.

There should be at least 3 commands available, each utilizing one of the following _util module_, _child process.exec_, and _child process.spawn_. Also try to import each command as a _custom module_. (_v8 module_ for bonus points!)

Example:

```
$ node mini-terminal

  --- Welcome to Mini-terminal! (Enter 'help' for help) ---

>>> help      // User types help

Commands:
  'exit'       - exit program
  'time'       - display current time
  'heap'       - display v8 heapStatistics
  'history'    - show history of commands entered in mini-terminal
  'dir'        - list files in directory and current path
  'connection' - check internet connection
  'help'       - show this help menu

>>> ...
```

> Functionality to incorporate: path module, util module, v8 module (optional), readline module, events module, custom module, child process.exec, child process.spawn



## Challenge 3: Project Initializer

Write a Project Initializer that when run will create a web application boilerplate, including folder structure and basic document set-up for a web project. Provided with an `--assets` flag followed by a directory path, the files from the assets folder will be placed accordingly into the new folder structure.

Example:
```
$ node project-init --name="my_project" --assets="../photos"     // Path to photos directory

Creating Folders...
Writing Files...
Streaming Assets...
Completed!

Folder Structure:

* my_project (root)
|
| - index.html
|
| * _styles
|     - style.css
|
| * _scripts
|     - main.js
|
| * _assets
|     - pictureA.jpg
|     - pictureB.jpg
|     - pictureC.jpg

New project at: /path/to/project

$...
```

> Functionality to incorporate (from within filesystem module): listing files, reading files, writing/appending files, renaming/removing files, directory creation, renaming/removing directories, readable file streams, writable file streams.



## Challenge 4: Simply Static whoisAPI

Use the _http module_ to create a simple static server that receives user input through an html form having to do with a search query for the [whoisAPI](http://whois-api.domaininformation.de/), checking if a site domain is owned by an entity. Use the server to query the request through an api and serve the corresponding JSON data to the client.

As a bonus try and incorporate the _nock module_ to mock out the API server response, the _cheerio module_ to test http end-points, and the _rewire module_ to mock out API data.

```
$ node simply-static-search

Http Server Running on port 3000...

GET request made for /
Serving index.html

POST request made for /dolphin.net

Checking whois API...
Responding w/ Search Results...
...
```

> Functionality to incorporate (from within http module): making a request, creating a server, serving files, serving JSON data, collecting POST data.



## Challenge 5: Image Gallery Collection

Create a RESTful (CRUD) _Express_ web application that is an image gallery, using a custom image API and utilizing the _cors_ module. As an added bonus use _browserify_ to bundle all client-side javascript files.

```
$ node image-gallery

Express Image Gallery Running on Port 3000...

GET request for /
DELETE request for /gallery/pictureA
POST request for /...
```

> Functionality to incorporate: package.json, express module, cors module, body-parser module.



## Challenge 6: Chat Application (x 2)

Write two socket-based applications, one using the _ws module_ and the other using _socket.io_. As an added bonus use _browserify_ to bundle all client-side javascript files.

Using _socket.io_ create a simple in-browser chat application that allows for multiple users on a home network to chat with each other.

Example:
<table style="">
  <tr>
    <th>John</th>
    <td> --&gt; Hey Guys, what's up?</td>
  </tr>
  <tr>
    <th>Jill</th>
    <td> --&gt; Nm...Just Chillin...</td>
  </tr>
  <tr>
    <th>John</th>
    <td> --&gt; Well that stinks...</td>
  </tr>
</table>
<input type="submit"><input value="Cool!">


Using the _ws module_ to create a socket-based ticker on stock-fighter that will display the market information through a streaming interface.

```
$ node socket-ticker

Stock-Fighter:

NA - Open - $90.00 ...
```

> Functionality to incorporate: ws module, socket.io module.



## Challenge 7: Test Driven Tool-kit

Choose a previous challenge and incorporate all of the recommended functionality regarding Unit Testing. This includes but not limited to: Mocha/Chai modules, nock module, rewire module, sinon module (spies and stubs), istanbul module, supertest module, cheerio module. Utilize these testing tools, fully incorporating them into a mini-project.

> Functionality to incorporate: Mocha/Chai modules, nock module, rewire module, sinon module (spies and stubs), istanbul module, supertest module, cheerio module.



## Challenge 8: Automate Everything

Create an npm script that will run a grunt, to handling transpiling, hinting, and watching of a project. Use the browserify module to bundle client-side scripts in a simple web-application (anything that involves server and client-side). Utilize the node-inspector to step through your code, actively setting break-points and watching variables.

> Functionality to incorporate: grunt module (including transpiling, hinting, and watches), browserify module, npm scripting, node-inspector module.
