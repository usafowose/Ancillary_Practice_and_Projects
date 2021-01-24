// Create a fn that takes in s string and a substring and determines the number of times the substr appears in the string. 

// Pseudocode --
// Loop over longer str
// Inner Loop over shorter str
// If chars don't match, break out of inner loop
// If chars do match, move onto next char
// If inner loop completes and finds a match, increment count
// return count 

const searchSubstr = (str = '', substr = '') => {
  let counter = 0
  let i, j;
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) break
    }
    if (j === substr.length) counter++

  }
  return counter;
}

let str = 'omwowom woomg omomg'
let substr = 'om'

console.log(searchSubstr(str, substr))