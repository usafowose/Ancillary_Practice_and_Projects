// Arr must be sorted
// Fn takes in array and val
// create two vars (pointers) which pt to leftmost/starting index and 1 that pts to rightmost/last index (length-1)
// create pointer in middle 
// while (arr[middle] !== val) ? 
// if val = midpoint , return index
// if val > midpoint, move left pointer up to midpt
// if val < midpoint, move right pointer down to midpt
// if val is never found ret -1

const BinarySearch = (arr = [1], search = 0) => {
  let sorted = arr.sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;
  let midpt = Math.floor((right + left) / 2)

  while (arr[midpt] !== search && left <= right) {
    arr[midpt] < search ? left = midpt + 1 : arr[midpt] > search ? right = midpt - 1 : null
    midpt = Math.floor((right + left) / 2)
  }

  return arr[midpt] === search ? midpt : -1
  // : midpt + 1 -- where it WOULD be 
  // console.log(sorted)
  // console.log(left, midpt, right)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 423, 534, 44, 2344, 12, 33, 33, 75, 66, 34, 95]
let val = 35

console.log(BinarySearch(arr, val))

