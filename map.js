// ON ARRAY 

var numArray = [1, 3, 5, 7, 9, 11]
var stringArray = ['Andrew', 'Queen', 'Tommy']

var tripled = numArray.map((cv, index, arr) => `We are currently mapping the ${index} index of our array : ${arr}. Our current value was ${cv} and now is ${cv * 3}`);

var lowerCase = stringArray.map((cv, index, arr) => {return cv.toLowerCase()})

var upperCase = stringArray.map(cv => cv.toUpperCase());

var confused = stringArray.map(cv => {
    return cv === 'Queen' ? true : false
})

console.log(stringArray); 
console.log(confused)
// console.log(lowerCase); 

// console.log(tripled);
// console.log(numArray); 

let camelCase = stringArray.map(cv => cv.split("").map((letter, index,arr) => index % 2 ? letter.toUpperCase() : letter.toLowerCase()).join(""))

console.log(camelCase); 