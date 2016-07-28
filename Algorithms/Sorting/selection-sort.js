/*
  Selection Sort
*/

function swap(arr, idx1, idx2) {
  let swap = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = swap;
}

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

selectionSort([15, 1, 3, 50, 2, 4, 5, 2, 1]); // => [ 1, 1, 2, 2, 3, 4, 5, 15, 50 ]
