// You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products.

// Test Case: [1,4,3,2] => [24,6,8,12]
//            [4,5,10,6] => [300, 240, 120, 200]

// exclude index 0
// multiply remainder of indexes and push to array at index 0 .reduce()
// 

var get_products_of_all_ints_except_at_index = (arr) => {
    let prod = [];
    for (let x of arr) {
        let removed = arr.shift()
        prod.push(arr.reduce((acc, cv) => acc * cv))
        arr.push(removed)
    }
    return prod;
}
    let arr = [1, 4, 3, 2]
    console.log(get_products_of_all_ints_except_at_index(arr))

