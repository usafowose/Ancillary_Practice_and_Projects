const selectionSort = (arr) => {
  const swap = (arr, indx1, indx2) => [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];

  for (i = 0; i < arr.length; i++) {
    let minIndx = i
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndx]) minIndx = j
    }
    if (minIndx !== i) swap(arr, minIndx, i)

  }
  return arr
}


let array = [22, 3, 5, 6, 3, 2, 7, 12, 1]

// [5, 6, 3, 2, 7] start @ 0 min is indx 3
// [2, 6, 3, 5, 7] start @ 1 min is indx 2
// [2, 3, 6, 5, 7] start @ 2 min is indx 3
// [2, 3, 5, 6, 7] start @ 3 min is indx 3
// 




console.log(selectionSort(array))