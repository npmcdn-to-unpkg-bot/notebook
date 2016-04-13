var v8 = require("v8");

function totalHeap() {
  return (`Total Heap Size:\t${v8.getHeapStatistics().total_heap_size}`);
}

function execHeapSize() {
  return (`Executable Heap Size:\t${v8.getHeapStatistics().total_heap_size_executable}`);
}

function totalPhysical() {
  return (`Total Physical Heap:\t${v8.getHeapStatistics().total_physical_size}`);
}

function totalAvailable() {
  return (`Total Available Heap:\t${v8.getHeapStatistics().total_available_size}`);
}

function usedHeap() {
  return (`Used Heap:\t${v8.getHeapStatistics().used_heap_size}`);
}

function heapLimit() {
  return (`Heap Limit:\t${v8.getHeapStatistics().heap_size_limit}`);
}

function v8Actions() {
  var actions = ["totalHeap", "execHeapSize", "totalPhysical", "totalAvailable", "usedHeap", "heapLimit", "v8Actions"];
  return actions.join(" | ");
}

module.exports = {
  totalHeap: totalHeap,
  execHeapSize: execHeapSize,
  totalPhysical: totalPhysical,
  totalAvailable: totalAvailable,
  usedHeap: usedHeap,
  heapLimit: heapLimit,
  v8Actions: v8Actions
}
