// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

// Note The array will never be empty and n will always be smaller than the length of the array.

// Example
//   sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) => "product"

// ---------------------------------COMMENTS-------------------------------------------------------

// given an array --< and number n; 

var sum = (arr, n) => {
    var sortedGtoL = [...arr].sort((a, b) => b - a).slice(0, n)
    return sortedGtoL.reduce((acc, cv) => acc + cv)
}

var prod = (arr, n) => {
    var sortedLtoG = [...arr].sort((a, b) => a - b).slice(0, n)
    return sortedLtoG.reduce((acc, cv) => acc * cv)
}

const sumOrProduct = (arr, n) => {
    let Sum = sum(arr, n);
    let Prod = prod(arr, n);
    return Sum > Prod ? `sum` : Prod > Sum ? `product` : `same`
};



