// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!
let arr = [4,5,7,5,4,8]



let repeats = (arr) => {
    let array = [...arr].sort((a,b) => a-b); 
    let reduced = array.reduce((acc, cv) => acc.indexOf(cv) !== -1 ? acc : [...acc, cv], [])
    // .filter((cv, i, arr) => arr[i+1] !== [i+2])
    console.log(array)
    console.log(reduced)
  
    // return reduced.

}
//     arr.filter(cv => cv)
    
    
//     // .reduce((acc, cv) => acc + cv)




// console.log(arr.filter((cv, index, arr) => arr.indexOf(cv) === index))
repeats([4,5,7,5,4,8])