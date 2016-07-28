'use strict';

// General purpose helper function used to swap array indecies in constanct time
function swap(arr, idx1, idx2) {
  let swap = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = swap;
}

/*
  Bubble Sort
*/

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    let current = array[i];
    for (var j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        let swap = array[j];
        array[j] = array[i];
        array[i] = swap;
      }
    }
  }
  return array;
}

/*
  Selection Sort
*/

function findSmallest(array, start) {
    let smallest;
    for (let i = start; i < array.length; i++) {
        if (smallest === undefined || array[i] < array[smallest]) {
            smallest = i;
        }
    }
    return smallest;
}

function selectionSort(array) {
    let currentIdx = 0;
    while (currentIdx < array.length) {
        let smallest = array.splice(findSmallest(array, currentIdx), 1)[0];
        array.splice(currentIdx, 0, smallest);
        currentIdx++;
    }
    return array;
}


/*
  Insertion Sort
*/

function insertIntoPos(array, value, floor) {
    let inserted = false;
    for (let i = floor-1; i >= 0; i--) {
        if (array[i] < value) {
            array.splice(i+1, 0, value);
            inserted = true;
            break;
        }
    }
    if (!inserted) { array.splice(0, 0, value); }
}

function insertionSort(array) {
  let sortedIndx = 1;
    while (sortedIndx < array.length) {
        let next = array.splice(sortedIndx, 1)[0];
        insertIntoPos(array, next, sortedIndx);
        sortedIndx++;
    }
    return array;
}

/*
  Merge Sort
*/

function merge(a, b) {
  let merged = [];
  let aPointer = 0;
  let bPointer = 0;

  while(true) {
    if (aPointer < a.length && bPointer < b.length) {
      if (a[aPointer] < b[bPointer]) {
        merged.push(a[aPointer]);
        aPointer++;
      } else {
        merged.push(b[bPointer]);
        bPointer++;
      }
    }
    else if (aPointer < a.length) {
      merged.push(a[aPointer]);
      aPointer++;
    }
    else if (bPointer < b.length) {
      merged.push(b[bPointer]);
      bPointer++;
    }
    else {
      break;
    }
   }
  return merged;
}

function mergeSort(arr) {
  if (arr.length === 1) { return arr; }

  let left = arr.slice(0, Math.floor(arr.length/2));
  let right = arr.slice(Math.floor(arr.length/2));

  return merge(mergeSort(left), mergeSort(right));
}

/*
  Quick Sort
*/

function partition(arr, left, right) {
  swap(arr, left, right);

  let pivot = arr[right];
  let wall = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, wall);
      wall++;
    }
  }
  swap(arr, right, wall);
  return wall;
}

function quickSort(arr, left=0, right=arr.length-1) {
  if (arr.length === 0) { return arr; }

  if (right > left) {
    quickSort(arr, partition(arr, left, right)+1, right);
    quickSort(arr, left, partition(arr, left, right)-1);
  }

  return arr;
}

module.exports = {
  mergeSort,
  quickSort,
  bubbleSort,
  selectionSort,
  insertionSort
};
