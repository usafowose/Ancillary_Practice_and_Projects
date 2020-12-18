// const arr = [1, 2, 3, 4]

// // Summing Values in An Array

// // let reduced = arr.reduce((acc, cv, i, arr) => acc + cv, 0)

// // console.log(reduced);

// const arr2 = [10, 25, 3, -8, 22, 7, 14, 71, 88, 84, -4, -9.8, 84.1]

// let minVal = arr2.reduce((acc, cv, i, arr) => Math.min(acc, cv), 100)

// // console.log(minVal)

// let maxVal = arr2.reduce((acc, cv, i, arr) => Math.max(acc, cv), 0)



// // return an object with the minVal, maxVal, and an array containing both min, and max vals
// // {
// // minVal: -9.8, 
// // maxVal: 88,
// // minMaxArr: [-9.8, 88]
// // }

// let minMaxArr = arr2.reduce((acc, cv, i, arr) => [Math.min(acc[0],cv), Math.max(acc[1],cv)], [100, 0])

// let obj = {
//   min: minVal, 
//   max: maxVal, 
//   minMaxArr: minMaxArr
// }

// console.log(obj)

// console.log(minMaxArr)

// // let sorted = arr2.sort((a,b) => a-b)

// // console.log(sorted, sorted[0])

const students = [
  {name: 'Andrew', age: 23, profession: 'Software Dev'}, 
  {name: 'Jimmy', age: 29, profession: 'Cat Groomer'}, 
  {name: 'Bo', age: 28, profession: 'therapist'}, 
  {name: 'Simeon', age: 45, profession: 'BOSS'}
]

// Give an object of objs

const objofObjs = students.reduceRight((acc, {name, age, profession}, i, arr) => {
  return {...acc, [name]: {age, profession}}
}, {}); 

console.log(objofObjs);



const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 11, 11, 21, 3, 5, 7]; 

// return an array in which there is only one occurence of each element

let unique = numbers.reduceRight((acc, cv, i, arr) => {
  return acc.indexOf(cv) !== -1 ? acc : [...acc, cv]
}, []); 

console.log(unique)