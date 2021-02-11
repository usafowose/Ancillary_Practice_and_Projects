// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 

// If there are multiple elements with the same value, remove the one with a lower index.

// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

const removeSmallest = arr => {
  if (arr.length > 0) {
    let copy = [...arr]
    let smallest = Math.min(...copy);
    copy.splice(smallest, 1);
    return copy;
  };
}

let testArray = [5, 7, 2, 4, 34];

console.log(removeSmallest(testArray)); 