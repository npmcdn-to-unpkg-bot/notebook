/*
  Insertion Sort
*/

function swap(arr, idx1, idx2) {
  let swap = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = swap;
}

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

insertionSort([1, 4, 7, 8, 2, 90, 1, 3]); // => [ 1, 1, 2, 3, 4, 7, 8, 90 ]
