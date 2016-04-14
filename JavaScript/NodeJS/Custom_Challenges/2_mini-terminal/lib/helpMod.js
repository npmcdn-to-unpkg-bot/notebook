var colors = require("colors/safe");
module.exports = function list() {
  return (`
${colors.yellow('log()')} - timestamp a logged expression
${colors.yellow('inspect()')} - print an object as a string
${colors.yellow('totalHeap')} - log total heap available
${colors.yellow('execHeap')} - log executable heap
${colors.yellow('totalPhysical')} - log total physical heap
${colors.yellow('totalAvailable')} - log total available heap
${colors.yellow('usedHeap')} - log amount of heap used
${colors.yellow('heapLimit')} - log heap limit
${colors.yellow('help')} - bring up help menu
    `).trim();
}
