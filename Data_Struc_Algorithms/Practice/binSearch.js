const binary = (arr, searchVal) => {
  let sorted = [...arr].sort((a, b) => a - b)
  let leftIn = 0;
  let rightIn = arr.length - 1
  let midpt = Math.floor((leftIn + rightIn) / 2);

  while (sorted[midpt] !== searchVal && leftIn <= rightIn) {
    sorted[midpt] < searchVal ? leftIn = midpt + 1 : rightIn = midpt - 1
    midpt = Math.floor((leftIn + rightIn) / 2)
    console.log(leftIn, midpt, rightIn)
  }
  console.log(midpt, sorted[midpt], searchVal)
  return sorted[midpt] === searchVal ? midpt : sorted[midpt] < searchVal ? midpt + 1 : 0
}

let testArr = [10, 20, 15, 30, 25, 35, 30, 40];


console.log(binary(testArr, 20000))

