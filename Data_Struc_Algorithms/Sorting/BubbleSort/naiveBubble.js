let array = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10]

const naiveBubble = (arr) => {
  const swap = (arr, indx1, indx2) => [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
  let noSwaps;
  for (i = arr.length; i > 0; i--) {
    noSwaps = true
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        console.log(arr, arr[j], arr[j + 1])
        noSwaps = false
      }
    }
    if (noSwaps) {
      break
    }
    console.log(`One Pass Complete`)
  }



  return arr
}

console.log(naiveBubble(array))