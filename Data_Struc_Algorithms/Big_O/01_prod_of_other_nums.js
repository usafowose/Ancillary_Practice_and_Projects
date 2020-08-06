// You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products.

// Test Case: [1,4,3,2] => [24,6,8,12]
//            [4,5,10,6] => [300, 240, 120, 200]

// 1. Have array argv
// 2. Have empty return array 
// 2. exclude current index from array 
// 3 Multipy all elements from resulting array (reduce)
// 4. Push result to empty array


let test = [1,4,3,2]; 
// let empty = []; 
// (test.splice(3,1)); 
// console.log(test); 

const multiple = (arr) => {
    let result= [];  
    for (let i=0; i<3; i++) {
         console.log((arr.splice(i,1))); 
        console.log((arr.reduce((a,b) => a*b)))
        
    }
}

multiple(test)


// let exceptionalProduct = (arr) => {

// }

// class ExceptionalProduct {
//     constructor (arr) {
        
//     }

// }
