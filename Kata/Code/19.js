const isPalindrome = (str = '') => {

  if (typeof str !== 'string') return `Not A String`
  let string = [...str];
  // first loop would start @ 0th index
  // inner loop starts at the end
  // check if the first val === last val 
  // if so (increment i and decrment j) --> check again
  // if not (return false)
  // if i === str.length - 1 || j = string.length - 1 return true

  let i = 0;
  let j = string.length - 1

  while (i < j && j <= string.length - 1) {
    if (string[i] !== string[j]) return false;
    if (i === j) break
    i++;
    j--;
  }
  return ((i + j === string.length - 1) && j - i <= 1) ? true : false

}

console.log(isPalindrome('tattarrattat'))