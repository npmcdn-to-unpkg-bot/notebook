# Automation and Deployment

## Hinting Your Code with Grunt

**Grunt** is a _CLI_ (command-line interface) that we can use to run automated processes. You want to install Grunt globally so you can use it anywhere, `sudo npm install -g grunt-cli`.

Any projects that you want to use Grunt on, you will want to install it locally as well, `npm install grunt --save-dev`.

One nice Grunt plug-in is JsHint, which we can also install, `npm install grunt-contrib-jshint --save-dev`.

In the root of the project we need to create a file called _GruntFile.js_. This is a file that Grunt looks for upon running.

```javascript
// GruntFile.js

// Export Grunt Configuration Details
// (passing in grunt instances as param)
module.exports = function(grunt) {
  // Initialize Grunt Configs
  // providing each task
  grunt.initConfig({
    // Details jshint need to run
    jshint: {
      // List files to hint
      files: ["*.js", "lib/*.js", "test/*.js"],
      // JsHint options
      options: {
        // Latest version of es
        esnext: true,
        // Any globals (i.e jQuery)
        globals: {
          jQuery: true
        }
      }
    }
  });

  // Load JsHint plug-in
  grunt.loadNpmTask("grunt-contrib-jshint");

  // Register a default task
  // (When 'grunt' is run in CL)
  grunt.registerTask("default", ["jshint"]);
}
```

Now if we run Grunt it should hint our code:

```
$ grunt

Running 'jshint:files' (jshint) task
------------------------------------
>>> 5 files lint free

Done, without errors.
```

So now we are using Grunt task runner to help hint our js code.

---

## Converting LESS to CSS with Grunt

Preprocessing stylesheet languages into css is something that many web-developers must deal with, due to the fact that css does not provide any programming functionality.

We can use Grunt to preprocess languages like Sass, LESS, and SCSS with Grunt. First, let's install a plug-in that allows us to process LESS to css, `npm install grunt-contrib-less --save-dev`.

While we are at it, we can install the Auto-Prefixer plug-in to help keep our code backward-compatible with older browsers by automatically adding vendor-prefixes where necessary in our css styles, `npm install grunt-autoprefixer --save-dev`.

Now open the _GruntFile.js_ created in the previous section.

```javascript
// GruntFile.js

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["*.js", "lib/*.js", "test/*.js"],
      options: {
        esnext: true,
        globals: {
          jQuery: true
        }
      }
    },
    // Add new task for LESS
    less: {
      // Production node specifies where
      // LESS files are and where css
      // should go
      production: {
        files: {
          // Css file path: [LESS Files]
          "public/css/style.css": ["less/*.less"]
        }
      }
    },
    // Add autoprefixer node
    autoprefixer: {
        // Set autoprefixer for single file
        single_file: {
          // File to run on
          src: "public/css/style.css"
          // File to export
          dest: "public/css/style.css"
        }
    }
  });

  grunt.loadNpmTask("grunt-contrib-jshint");
  // loadNpmTask for LESS Preprocessing
  grunt.loadNpmTask("grunt-contrib-less");
  // loadNpmTask for autoprefixer
  grunt.loadNpmTask("grunt-autoprefixer");

  // Set up new task called 'css' that will
  // first preprocess LESS to css and then
  // autoprefix it
  grunt.registerTask("css", ["less", "autoprefixer"]);
  // Add css task to default grunt task
  grunt.registerTask("default", ["jshint", "css"]);
}
```

Now when we run `grunt` the default task will fire, which will jshint our code. Then the css task that will preprocess the LESS to css followed by autoprefixing the converted css.

```
$ grunt

Running "jshint:files" (jshint) task
------------------------------------
>> 5 files lint free.

Running "less:production" (less) task
-------------------------------------
File public/css/style.css created

Running "autoprefixer:single_file" (autoprefixer) task
------------------------------------------------------
>> 1 autoprefixed stylesheet created.

Done, without errors.
```

---

## Bundling Client Scripts with Browserify

**Browserify** is a node project that will allow us to use _CommonJS_ for our client-side javascript as well. With Browserify, all we need to do is point out our client-side js files, and it will automatically package up all the modules and dependencies into one bundled file that would be sent to the client. First we need to install Browserify, `npm install grunt-browserify --save-dev`.

In this example if we have can _require()_ a library like jQuery with the help of Browserify, for this example we will need to require the jQuery dependency, `npm install jquery`.

```javascript
// app-client.js

// Require jquery
var $ = require("jquery");
// Require printTerms module
var printTerms = require("printTerms");

$(document).ready(function() {
  // Notice printTerms is a function
  // that needs to be imported from custom
  // module
  $.getJSON('/dictionary-api', printTerms);
});
```

We can now navigate to the index.html file and load only one bundled script (as opposed to many):

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <!-- Load single bundled js file -->
    <script src="/js/bundle.js"></script>
  </body>
</html>
```

Now we need to set up our _GruntFile_:

```javascript
// GruntFile.js

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["*.js", "lib/*.js", "test/*.js"],
      options: {
        esnext: true,
        globals: {
          jQuery: true
        }
      }
    },
    less: {
      production: {
        files: {
          "public/css/style.css": ["less/*.less"]
        }
      }
    },
    autoprefixer: {
        single_file: {
          src: "public/css/style.css"
          dest: "public/css/style.css"
        }
    },
    // Add new task for Browserify
    browserify: {
      // Client node specifies files
      client: {
        // Source client js file
        // ---------------------
        // Note: all other dependencies
        // 'required' by this file will
        // automatically be bundled.
        src: ["app-client.js"],
        // Specify destination file
        dest: "public/js/bundle.js"
      }
    }
  });

  grunt.loadNpmTask("grunt-contrib-jshint");
  grunt.loadNpmTask("grunt-contrib-less");
  grunt.loadNpmTask("grunt-autoprefixer");
  // Add new browserify grunt task
  grunt.loadNpmTask("grunt-browserify");

  grunt.registerTask("css", ["less", "autoprefixer"]);
  // Set up new task for javascript
  grunt.registerTask("js", ["browserify"]);

  grunt.registerTask("default", ["jshint", "css", "js"]);
}
```

Now if we run `Grunt`:

```
$ grunt

Running "jshint:files" (jshint) task
------------------------------------
>> 5 files lint free.

Running "less:production" (less) task
-------------------------------------
File public/css/style.css created

Running "autoprefixer:single_file" (autoprefixer) task
------------------------------------------------------
>> 1 autoprefixed stylesheet created.

Running "browserify:client" (browserify) task
---------------------------------------------
>> Bundle public/js/bundle.js created.


Done, without errors.
```

So this allows for javascript to be written for the client just as it is written on our server-side. Because these scripts are bundled into one file, only one request needs to be made by the client.

---

## Rapid Development with Grunt Watches

We can also use Grunt to set up tasks to be run whenever files are changed and saved. These are known as _watches_. To get started we need to first install the grunt watch plug-in: `npm install grunt-contrib-watch --save-dev`.

Now we can add our watches to the GruntFile:

```javascript
// GruntFile.js

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["*.js", "lib/*.js", "test/*.js"],
      options: {
        esnext: true,
        globals: {
          jQuery: true
        }
      }
    },
    less: {
      production: {
        files: {
          "public/css/style.css": ["less/*.less"]
        }
      }
    },
    autoprefixer: {
        single_file: {
          src: "public/css/style.css"
          dest: "public/css/style.css"
        }
    },
    browserify: {
      client: {
        src: ["app-client.js"],
        dest: "public/js/bundle.js"
      }
    },
    // Add node for Grunt Watch task
    watch: {
      // Add nodes for tasks to watch
      css: {
        // Tell grunt which files to Watch
        files: ["less/*.less"],
        // Tell grunt which task to run
        tasks: ["css"]
      },
      scripts: {
        // Again tell grunt files to Watch
        files: ["app-client.js", "lib/*.js"],
        // Tell grunt which task to run
        tasks: ["jshint", "browserify"]
      }
    }
  });

  grunt.loadNpmTask("grunt-contrib-jshint");
  grunt.loadNpmTask("grunt-contrib-less");
  grunt.loadNpmTask("grunt-autoprefixer");
  grunt.loadNpmTask("grunt-browserify");
  // Load Grunt Watch plug-in
  grunt.loadNpmTask("grunt-contrib-watch");

  grunt.registerTask("css", ["less", "autoprefixer"]);
  grunt.registerTask("js", ["browserify"]);

  grunt.registerTask("default", ["jshint", "css", "js"]);
}
```

> **Note:** We do not need to registerTask for Grunt Watch because we will be running it directly.

Now if we navigate to the terminal we can run `grunt watch`, which will be an on-going process listening for changes to the file:

```
$ grunt watch

Running "watch" task
--------------------
Waiting...
```

And if we made a change to one of our files (i.e changed a style):

```
$ grunt watch

Running "watch" task
--------------------
Waiting...
>> File "less/style.less" changed.
Running "less:production" (less) task
-------------------------------------
File public/css/style.css created

Running "autoprefixer:single file" (autoprefixer) task
>> 1 autoprefixed stylesheet created.

Done, without errors.
Completed in 1.922s at Sat Oct 12 2016 15:02:08 GMT-0700 (PDT) - Waiting...
```

> **Note:** Use <kbd>Ctrl</kbd>-<kbd>C</kbd> to end Grunt Watch process.

So now Grunt will 'watch' for when we change our stylesheets and script files, automatically saving and updating them for us.

---

## Automation with NPM

**Npm** (_Node Package Manager_) also provides methods of running, testing, debugging, or running any unix or DOS commands. Some of these tools are extremely important for developers in infrastructure to automatically install dependencies, run tests, or start an application.

In a _package.json_ file there is a _scripts_ node that by default `"test": "echo \"Error: no test specified\" && exit 1`. You can actually create custom scripts that get called within this node.

Every script in npm has a _pre-script_ and a _post-script_, so you can run specific actions before or after an application runs. Custom npm keywords can also be utilized:

```javascript
// package.json
{
  "name": "another_app",
  "version": "1.0.0",
  "description": "A simple web application",
  "main": "app.js",
  // Here is where we can run custom scripts
  "scripts": {
    // "prestart": an npm keyword specifying prestart actions
    // Run grunt (transpile, watch, lint)
    "prestart": "grunt",
    // "start": an npm keyword specifying starting an app
    // Run node application
    "start": "node app",
    // Custom npm keyword "dev"
    "predev": "grunt"
    // 1. Open web-browser
    // 2. Run node-dev (to see immediate changes)
    // 3. Runt grunt watch (run grunt when files change)
    // (Note: '&' means 'simultaneously' or at same time)
    "dev": "open http://localhost:3000 & node-dev app & grunt watch"

  },
  "repository": {
    "type": "git",
  },
  "keywords": [
    "application"
  ],
  "author": "Bill Nye",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/billnye/another_app#readme"
  },
  "dependencies": {
    "body-parser": "^1.14.2",
    "cors": "^2.7.1",
    "express": "^4.13.4",
    "ipware": "0.0.7",
    "nodemailer": "^2.1.0"
  }
}
```

And if we navigate to the terminal and run the `start` scripts:

```
$ npm start

--- Prestart ---

# Grunt Runs

Running "jshint:files" (jshint) task
------------------------------------
>> 5 files lint free.

Runn...

Done, without errors.

--- Start ---

# Application Starts

Node App Running on Port 3000...
```


We can also run the custom `dev` script we created instead of `start`:


```
$ npm run dev

--- Predev ---

# Grunt Runs

Running "jshint:files" (jshint) task
------------------------------------
>> 5 files lint free.

Runn...

Done, without errors.


--- Dev ---

** Browser opens @ http://localhost:3000...

** Node-dev runs app...

** Grunt watch begins...
```


> **Note:** With the standard npm keywords such as: _prestart_, _start_, _poststart_ you can simply enter 'npm' followed by the keyword, i.e `npm start`. With custom keywords you need to include 'run' before the keyword, i.e `npm run dev`.


---

## Debugging with NPM

**Node-Inspector** is a node module that will help you debug your javascript code. There is a _debug script_ that we can set up in our _package.json_ that we can simply run `npm debug` and everything we need to debug our scripts will come up.

First lets get Node-Inspector: `sudo npm install -g node-inspector`. Node-Inspector lets us debug on _localhost port 8080_ and open the debug in another browser window at a specified _localhost port_ (i.e 5858).

If we navigate to our package.json we can add a debug script to our _scripts_ node:

```javascript
// package.json
{
  "name": "another_app",
  "version": "1.0.0",
  "description": "A simple web application",
  "main": "app.js",
  // Add debug script node
  "scripts": {
    // Before debug run grunt
    "predebug": "grunt",
    // Open windows for app (3000), node-inspector (8080), debugger (5858)
    "debug": "open http://localhost:3000 & open http://localhost:8080/debug?port=5858 ",
    // Run node-inspector and app (w/ --debug flag)
    "postdebug": "node-inspector & node --debug app"
    "prestart": "grunt",
    "start": "node app",
    "predev": "grunt"
    "dev": "open http://localhost:3000 & node-dev app & grunt watch"

  },
  "repository": {
    "type": "git",
  },
  "keywords": [
    "application"
  ],
  "author": "Bill Nye",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/billnye/another_app#readme"
  },
  "dependencies": {
    "body-parser": "^1.14.2",
    "cors": "^2.7.1",
    "express": "^4.13.4",
    "ipware": "0.0.7",
    "nodemailer": "^2.1.0"
  }
}
```

And if we now try to start the debugger it should work:

```
$ npm run debug

--- Predebug ---

* Grunt Runs .....

--- Debug ---

* Browser opens at localhost:3000
* Browser opens at localhost:8080
* Browser opens at localhost:5858

--- PostDebug ---

* Node inspector opens up...
```

> **Note:** Again because debug is a custom npm script, we need to run `npm run debug`.

In the Node-Inspector you can step through your code just as you would in the Chrome browser, but rather than only seeing client-side javascript files you can debug the server-side scripts.
