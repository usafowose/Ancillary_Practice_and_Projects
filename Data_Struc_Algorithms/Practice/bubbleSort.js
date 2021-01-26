const bubbleSort = (arr) => {
  const swap = (arr, indx1, indx2) => [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
  let wrongIndices = []
  let i = arr.length - 1

  while (i > 0) {
    let swaps = false
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        wrongIndices.push(`${j} and ${j + 1}`)
        swap(arr, j, j + 1)
        swaps = true
      }
    } 
    if (!swaps) break
    i--;
  }
  return [arr, wrongIndices]
}


console.log(bubbleSort([2, 3, 1, 5, 6, 7, 17, 18, 9]))