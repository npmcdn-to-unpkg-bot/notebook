module.exports = function(namespace) {
  // bind namespace as first arg to console.log()
  return console.log.bind(null, namespace);
}
