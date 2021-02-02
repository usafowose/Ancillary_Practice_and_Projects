// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.



// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6],  nums2 = [2,5,6]
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

const sortedMerged = (nums1 = [1], m = 1, nums2 = [1], n = 1) => {
  return [...nums1, ...nums2].sort().filter(cv => cv !== 0)

}


let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3

console.log(sortedMerged(nums1, m, nums2, n))