var prompt = require("prompt");
var colors = require("colors/safe");
var homedir = require("homedir");
// Custom modules
var setup = require("./lib/setup");

// Customize prompt
prompt.message = "";
prompt.delimiter = "";
prompt.colors = false;

prompt.start();

var selection = {};

var selectionRoute = function() {
  if (selection.type === '1') {
    setup.basic(selection);
  } else if (selection.type === '2') {
    setup.application(selection);
  }
};

var defaultFileNames = [
  "tilemvcde",
  "alider",
  "Milkshapp",
  "machenejs",
  "Overgeo",
  "Ancience",
  "qwesom",
  "Rumbars",
  "Codelor",
  "spathquire",
  "Leafclude",
  "jpars",
  "wormie",
  "unifoxjs",
  "glader",
  "ingode",
  "clepotr",
  "knocketche",
  "synturid",
  "libraerge"
];

function init() {
  prompt.addProperties(selection, [{
    name: "name",
    description: colors.white("Project Name: "),
    message: `Please enter a project name`,
    required: true,
    type: 'string',
    default: defaultFileNames[Math.floor(Math.random()*defaultFileNames.length)],
    before: function(value) {
      if (value === "exit") {
        process.exit();
      } else {
        return value;
      }
    }
  }, {
    name: "path",
    description: colors.white("Project Root Path: "),
    message: `Please enter a valid path`,
    required: true,
    default: `${homedir()}/Desktop`,
    pattern: /^\/?(?:[^\/\s]\/)?(?:[^\/\s]+\/?)*$/,
    before: function(value) {
      if (value === "exit") {
        process.exit();
      } else {
        return value;
      }
    }
  }, {
    name: "type",
    description: colors.white("Project Type? ('1' for Basic Web / '2' for Web App) "),
    message: `Please select 1' or '2'`,
    required: true,
    default: '1',
    pattern: /^([12])|exit$/,
    before: function(value) {
      if (value === "exit") {
        process.exit();
      } else {
        return value;
      }
    }
  }, {
    name: "gitignore",
    description: colors.white("Add .gitignore file? ('y'/'n') "),
    message: `Please select 'y' or 'n'`,
    required: true,
    default: 'y',
    pattern: /y|n/i,
    before: function(value) {
      if (value === "exit") {
        process.exit();
      } else {
        return value;
      }
    }
  },{
    name: "readme",
    description: colors.white("Add README.md file? ('y'/'n') "),
    message: `Please select 'y' or 'n'`,
    required: true,
    default: 'y',
    pattern: /y|n/i,
    before: function(value) {
      if (value === "exit") {
        process.exit();
      } else {
        return value;
      }
    }
  },{
    name: "test",
    description: colors.white("Add test directory? ('y'/'n') "),
    message: `Please select 'y' or 'n'`,
    required: true,
    default: 'y',
    pattern: /y|n/i,
    before: function(value) {
      if (value === "exit") {
        process.exit();
      } else {
        return value;
      }
    }
  },{
    name: "gruntfile",
    description: colors.white("Add Gruntfile file? ('y'/'n') "),
    message: `Please select 'y' or 'n'`,
    required: true,
    default: 'y',
    pattern: /y|n/i,
    before: function(value) {
      if (value === "exit") {
        process.exit();
      } else {
        return value;
      }
    }
  }], function(err) {
    if (err) { console.error(`There was an error: ${err}`); }
    verify();
  });
}

init();

function verify() {
  prompt.get([{
    name: "verify",
    description: colors.yellow(`
Name: ${colors.cyan(selection.name)}
Path: ${colors.cyan(selection.path + '/' + selection.name)}
Type: ${colors.cyan((selection.type === '1') ? "Basic Web" : "Web App")}
Gitignore: ${colors.cyan((selection.gitignore === 'y') ? "Yes" : "No")}
Readme: ${colors.cyan((selection.readme === 'y') ? "Yes" : "No")}
Test: ${colors.cyan((selection.test === 'y') ? "Yes" : "No")}
Gruntfile: ${colors.cyan((selection.gruntfile === 'y') ? "Yes" : "No")}

${colors.white("Is this correct? ('y'/'n')")}`),
    message: "Please select 'y' or 'n'",
    required: true,
    default: 'y',
    pattern: /y|n/i,
    before: function(value) {
      if (value === "exit") {
        process.exit();
      } else {
        return value;
      }
    }
  }], function(err, result) {
    if (err) { console.error(`There was an error: ${err}`); }
    (result.verify === "y") ? selectionRoute() : init();
  });
}
