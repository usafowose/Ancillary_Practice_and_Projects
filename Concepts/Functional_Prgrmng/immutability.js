// Immutability (inability to be changed) of data structures is key concept in fnctnl prgmng; 
// ----------------------

let person = {
    name: 'Andrew', 
    age: 23, 
    favFood: 'pizza'
}

let people = [
    {name: 'Andrew', age: 23}, 
    {name: 'Queen', age: 22}, 
    {name: 'Jimmy', age: 29}
]

// 1. MUTABLE
const bDay = (obj, newAge) => {
    obj.age = newAge; 
    return obj; 
}; // changes original person.age property to have val of newAge --mutates original data struc (obj)

// 1A. MUTABLE
const newPerson = (currentList, newName, newAge) => {
    currentList.push({name: newName, age: newAge})
    return currentList;
}; //.push() method pushes new obj to array and changes original array 

// 2. IMMUTABLE
const immutableBday = (obj, newAge) => ({
    ...obj, 
    age: newAge
})
// console.log(immutableBday(person, 26)); 
// console.log(person); 

// 2A. IMMUTABLE
const immutableNewPerson = (currentList, newName, newAge) => [...currentList, {name: newName, age: newAge}] 
//spread oprtr allows us to copy array then append to it and return it 
// console.log(immutableNewPerson(people, 'JC', 28)); 
// console.log(people); 

