// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
const getSum = (int1, int2) => {
  let [least, greatest] = [Math.min(int1, int2), Math.max(int2, int1)]; 
  let sum = 0; 
  while (least<= greatest) {
    sum+=least; 
    least++; 
  }
  return sum; 
}

console.log(getSum(5,5)); 