var v8 = require("v8");

function totalHeap() {
  return v8.getHeapStatistics().total_heap_size;
}

function execHeapSize() {
  return v8.getHeapStatistics().total_heap_size_executable;
}

function totalPhysical() {
  return v8.getHeapStatistics().total_physical_size;
}

function totalAvailable() {
  return v8.getHeapStatistics().total_available_size;
}

function usedHeap() {
  return v8.getHeapStatistics().used_heap_size;
}

function heapLimit() {
  return v8.getHeapStatistics().heap_size_limit;
}

function v8Actions() {
  var actions = ["totalHeap", "execHeapSize", "totalPhysical", "totalAvailable", "usedHeap", "heapLimit", "v8Actions"];
  return actions;
}

module.exports = {
  totalHeap: totalHeap(),
  execHeapSize: execHeapSize(),
  totalPhysical: totalPhysical(),
  totalAvailable: totalAvailable(),
  usedHeap: usedHeap(),
  heapLimit: heapLimit(),
  v8Actions: v8Actions()
}
