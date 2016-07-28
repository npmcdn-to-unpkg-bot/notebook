/*
  Bubble Sort
*/

function swap(arr, idx1, idx2) {
  let swap = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = swap;
}

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

bubbleSort([1, 3, 4, 20, 5, 7, 9, 10]); // => [1, 3, 4, 5, 7, 9, 10, 20]
