const insertionSort = (arr) => {
  for (i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    for (j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal
  }

  return arr
}


console.log(insertionSort([2, 1, 9, 76, 4, -2, 7]))