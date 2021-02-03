// Given an array of integers nums containing n + 1 integers where each integer is in the range[1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.



//   Example 1:

// Input: nums = [1, 3, 4, 2, 2]
// Output: 2

const findDuplicate = nums => [...nums].sort().reduce((acc, cv, i, arr) => acc.indexOf(cv) === -1 ? [...acc, cv] : [...acc, cv].slice(i - 1)
  , [])[0]
  ;

let nums = [1, 1, 1, 1, 1, 1, 1, 1, 1,1]
let nums2 = [0,0,8,7]


console.log([2, 3, 4, 5].slice().sort())


