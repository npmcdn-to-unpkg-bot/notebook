var colors = require("colors/safe");
var v8 = require("v8");

function totalHeap() {
  return (`${colors.green('Total Heap Size -->')}\t${v8.getHeapStatistics().total_heap_size}`);
}

function execHeapSize() {
  return (`${colors.green('Executable Heap Size -->')}\t${v8.getHeapStatistics().total_heap_size_executable}`);
}

function totalPhysical() {
  return (`${colors.green('Total Physical Heap -->')}\t${v8.getHeapStatistics().total_physical_size}`);
}

function totalAvailable() {
  return (`${colors.green('Total Available Heap -->')}\t${v8.getHeapStatistics().total_available_size}`);
}

function usedHeap() {
  return (`${colors.green('Used Heap -->')}\t${v8.getHeapStatistics().used_heap_size}`);
}

function heapLimit() {
  return (`${colors.green('Heap Limit -->')}\t${v8.getHeapStatistics().heap_size_limit}`);
}

module.exports = {
  totalHeap: totalHeap,
  execHeapSize: execHeapSize,
  totalPhysical: totalPhysical,
  totalAvailable: totalAvailable,
  usedHeap: usedHeap,
  heapLimit: heapLimit
}
