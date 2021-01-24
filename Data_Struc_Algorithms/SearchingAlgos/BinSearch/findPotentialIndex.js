const potentialIndex = (arr = [1], search = 0) => {
  let sorted = arr.sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;
  let midpt = Math.floor((right + left) / 2)

  while (arr[midpt] !== search && left <= right) {
    arr[midpt] < search ? left = midpt + 1 : arr[midpt] > search ? right = midpt - 1 : null
    midpt = Math.floor((right + left) / 2)
  }

  return arr[midpt] === search ? midpt : midpt + 1
  // : midpt + 1 -- where it WOULD be 
  // console.log(sorted)
  // console.log(left, midpt, right)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 423, 534, 44, 2344, 12, 33, 33, 75, 66, 34, 95]
let val = 35
console.log(potentialIndex(arr, val))