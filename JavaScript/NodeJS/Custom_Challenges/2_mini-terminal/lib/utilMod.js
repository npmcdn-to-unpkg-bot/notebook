var util = require("util");

function tsLog(content) {
  util.log(content);
}

function objLayout(object) {
  return util.inspect(object, {
    showHidden: true,
    depth: null,
    colors: true
  });
}

module.exports = {
  tsLog: tsLog,
  objLayout: objLayout
}
