var fs = require("fs");
var templates = require("./templates");

function basicSetup(projectOptions) {

  var basicFiles = [{
    name: "index.html",
    content: templates.setHtml(projectOptions.name)
  }, {
    name: "css/style.css",
    content: templates.setCss()
  }, {
    name: "js/script.js",
    content: templates.setJs()
  }, {
    name: "assets/images/.gitkeep",
    content: ""
  }, {
    name: "assets/icons/.gitkeep",
    content: ""
  }];

  var projectPath = projectOptions.path + "/" + projectOptions.name + "/";
  // create folder structure
  fs.mkdirSync(`${projectPath}`);
  fs.mkdirSync(`${projectPath}css`);
  fs.mkdirSync(`${projectPath}js`);
  fs.mkdirSync(`${projectPath}assets`);
  fs.mkdirSync(`${projectPath}assets/images`);
  fs.mkdirSync(`${projectPath}assets/icons`);
  // Once Root folder made create rest of stuff that is definite
  basicFiles.forEach((file) => {
    fs.writeFile(projectPath + file.name, file.content, (err) => {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  });
  // Add optional files accordingly
  if (projectOptions.gitignore === 'y') {
    fs.writeFile(projectPath + ".gitignore", templates.setGitignore(), function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  if (projectOptions.readme === 'y') {
    fs.writeFile(projectPath + "README.md", templates.setReadme(projectOptions.name), function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  if (projectOptions.test === 'y') {
    fs.mkdirSync(`${projectPath}test`);
    fs.writeFile(projectPath + "test/test.js", templates.setTest("index"), function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  if (projectOptions.gruntfile === 'y') {
    fs.writeFile(projectPath + "Gruntfile.js", templates.setGruntfile(), function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  console.log(`Basic Project Created at: ${projectPath}`);
}




function applicationSetup(projectOptions) {

  var applicationFiles = [{
    name: "app.js",
    content: ""
  }, {
    name: "lib/.gitkeep",
    content: ""
  }, {
    name: "logs/.gitkeep",
    content: ""
  },{
    name: "public/index.html",
    content: templates.setHtml(projectOptions.name)
  }, {
    name: "public/css/style.css",
    content: templates.setCss()
  }, {
    name: "public/js/script.js",
    content: templates.setJs()
  }, {
    name: "public/assets/images/.gitkeep",
    content: ""
  }, {
    name: "public/assets/icons/.gitkeep",
    content: ""
  }];

  var projectPath = projectOptions.path + "/" + projectOptions.name + "/";
  // create folder structure
  fs.mkdirSync(`${projectPath}`);
  fs.mkdirSync(`${projectPath}lib`);
  fs.mkdirSync(`${projectPath}logs`);
  fs.mkdirSync(`${projectPath}node_modules`);
  fs.mkdirSync(`${projectPath}public`);
  fs.mkdirSync(`${projectPath}public/css`);
  fs.mkdirSync(`${projectPath}public/js`);
  fs.mkdirSync(`${projectPath}public/assets`);
  fs.mkdirSync(`${projectPath}public/assets/images`);
  fs.mkdirSync(`${projectPath}public/assets/icons`);
  // Once Root folder made create rest of stuff that is definite
  applicationFiles.forEach((file) => {
    fs.writeFile(projectPath + file.name, file.content, (err) => {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  });
  // Add optional files accordingly
  if (projectOptions.gitignore === 'y') {
    fs.writeFile(projectPath + ".gitignore", templates.setGitignore(), function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  if (projectOptions.readme === 'y') {
    fs.writeFile(projectPath + "README.md", templates.setReadme(projectOptions.name), function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  if (projectOptions.test === 'y') {
    fs.mkdirSync(`${projectPath}test`);
    fs.writeFile(projectPath + "test/test.js", templates.setTest("app"), function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  if (projectOptions.gruntfile === 'y') {
    fs.writeFile(projectPath + "Gruntfile.js", templates.setGruntfile(), function(err) {
      if (err) { console.error(`There was an error: ${err}`); }
    });
  }
  console.log(`Application Project Created at: ${projectPath}`);
}

module.exports = {
  basic: basicSetup,
  application: applicationSetup
}
