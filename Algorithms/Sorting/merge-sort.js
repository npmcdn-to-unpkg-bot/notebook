/*
  Merge Sort
*/

function swap(arr, idx1, idx2) {
  let swap = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = swap;
}

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

mergeSort([3, 67, 1, 6, 8, 23, 1, 670, 2]); // => [1, 1, 2, 3, 6, 8, 23, 67, 670]
