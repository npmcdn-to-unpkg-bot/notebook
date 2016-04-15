var fs = require("fs");

var files = [{
  name: "index.html",
  content: ""
}, {
  name: "css/style.css",
  content: ""
}, {
  name: "js/script.js",
  content: ""
}, {
  name: "assets/images/.gitkeep",
  content: ""
}, {
  name: "assets/icons/.gitkeep",
  content: ""
}];

function setup(projectOptions) {
  var projectPath = projectOptions.path + "/" + projectOptions.name + "/";
  // create folder structure
  fs.mkdirSync(`${projectPath}`);
  fs.mkdirSync(`${projectPath}css`);
  fs.mkdirSync(`${projectPath}js`);
  fs.mkdirSync(`${projectPath}assets`);
  fs.mkdirSync(`${projectPath}assets/images`);
  fs.mkdirSync(`${projectPath}assets/icons`);
  // Once Root folder made create rest of stuff that is definite
  files.forEach((file) => {
    fs.writeFile(projectPath + file.name, file.content, (err) => {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  });
  // Add optional files accordingly
  if (projectOptions.gitignore === 'y') {
    fs.writeFile(projectPath + ".gitignore", "", function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  if (projectOptions.readme === 'y') {
    fs.writeFile(projectPath + "README.md", "", function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  if (projectOptions.test === 'y') {
    fs.mkdirSync(`${projectPath}test`);
    fs.writeFile(projectPath + "test/test.js", "", function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  if (projectOptions.gruntfile === 'y') {
    fs.writeFile(projectPath + "Gruntfile.js", "", function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  console.log(`Project Created at: ${projectPath}`);
}

module.exports = {
  setup: setup
}
