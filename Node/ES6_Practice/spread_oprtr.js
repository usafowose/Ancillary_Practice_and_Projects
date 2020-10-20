// 1. To combine content of an array 
var male = ['Jimmy', 'Simeon', 'Dad', 'Andrew']
var female = ['Mom', 'Bolaji', 'Fikayo']
var family = [...male, ...female];
console.log(family);

// 2. To use & copy contents of array without mutating the orginal array
let backwards = family.reverse();
console.log(backwards); console.log(family)// returns the same thing. original family array has been mutated
// using the spread operator, you can copy this array then mutate the copy i.e
backwards = [...family].reverse();
console.log(backwards); // returns original [...male, ...female] order
console.log(family.reverse()); //returns same as backwards because as is, original family was mutated by first reverse() on line 9. reverse reverts;

// 3. To get some, or the rest of elements on an array
console.log(family);
var [cornellGrad, ...other] = family;
console.log(cornellGrad); // returns 'Jimmy'
console.log(other) // returns ['Simeon', 'Dad', 'Andrew', 'Mom', 'Bolaji', 'Fikayo']

// 4. To collect fn argvs as an array (params in declaration must use spread) and use them to do work
var directions = (...argvs) => {
    var [start, ...rest] = argvs;
    var [destination, ...stops] = rest.reverse();
    return {
        start: start,
        destination: destination,
        stopQuant: stops.length,
        stopWhere: stops.reverse()
    }
}
console.log(directions('Miami', 'Atlanta', 'Spartanburg', 'Charlotte', 'Richmond', 'Washington, DC', 'Baltimore'))
// returns { 
//           start: 'Miami',
//           destination: 'Baltimore',
//           stopQuant: 5,
//           stopWhere: [ 'Atlanta', 'Spartanburg', 'Charlotte', 'Richmond', 'Washington, DC' ] 
//         }


// 5. To combine properties of objects. The spread operator represents the contents of the objects (their keys and vals) not the obj itself
var breakfast = {
    meal: 'Oatmeal',
    calories: 350
}
var carbs = true;


var breakfastReport = {
    ...breakfast,
    carbs
}

console.log(breakfastReport); //returns { meal: 'Oatmeal', calories: 350, carbs: true }