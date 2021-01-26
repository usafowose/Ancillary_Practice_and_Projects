// return the number of occurences of substr in string 

const strSearch = (string, substring) => {
  let counter = 0
  let i = 0
  while (i < string.length) {
    for (j = 0; j < substring.length; j++) {
      if (string[i + j] !== substring[j]) {
        console.log('No Match')
        break
      } else {
        console.log(`Match`)
      }
      if (j === substring.length - 1) {
        console.log(`fullstr`);
        counter++
      }
    }
    i++
  }

  return counter
}

let string = `binonionionsplonions`
let substr = 'onions'

console.log(strSearch(string, substr))