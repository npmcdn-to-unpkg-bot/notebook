"use strict";

/*
  Quick Sort
*/

function swap(arr, idx1, idx2) {
  let swap = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = swap;
}

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

quickSort([3, 67, 1, 1, 2, 43, 20, 1002, 50, 7]); // => [1, 1, 2, 3, 6, 8, 23, 67, 670]
