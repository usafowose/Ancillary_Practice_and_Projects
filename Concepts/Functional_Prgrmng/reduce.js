const arr = [10, 25, 3, -8, 22, 7, 14, 71, 88, 84, -4, -9.8, 84.1]

let mintoMax = [...arr].sort((a, b) => a - b)

let max = arr.reduce((acc, cv) => Math.max(acc, cv), 0)

let min = arr.reduce((acc, cv) => Math.min(acc, cv), 1000)

let minAndMax = arr.reduce((acc, cv) => [Math.min(acc[0], cv), Math.max(acc[1], cv)], [1000, 0])

console.log(
    {
        min: min,
        max: max,
        minMxArr: minAndMax
    }
)


const students = [
    { name: 'Andrew', age: 23, pass: true },
    { name: 'Queen', age: 22, pass: true },
    { name: 'Dahjah', age: 21, pass: false },
    { name: 'Jas', age: 22, pass: true }
]

let studentObj = students.reduceRight((acc, { name, age, pass }) => {
    return { ...acc, [name]: { name, age, pass } }
}, {})

console.log(studentObj)

// OR
// acc[name] = {name, age, pass}; 
// return acc; 



let studentObj2 = Object.keys(studentObj).map(key => {
    return { [key]: studentObj[key] }
})

console.log(studentObj2)



const colors = [1, 3, 5, 7, 9, 2, 4, 6, 8, 11, 11, 21, 3, 5, 7]

let onlyOnce = colors.reduce((acc, cv) => acc.indexOf(cv) !== -1 ? acc : [...acc, cv], [])

// console.log(onlyOnce);