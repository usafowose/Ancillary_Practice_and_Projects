// fn accepts array and val
// check if val is in array 
// if so return index, 
// if not, return -1

const findVal = (arr = [], val = 0) => arr.indexOf(val)

let arr = [1, 2, 3, 5, 7, 9]
let val = 4;
let val2 = 7;

console.log(findVal(arr, val), findVal(arr, val2))

