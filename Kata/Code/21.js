// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

const descendingOrder = n => parseInt([...n.toString()].sort((a, b) => b - a).join(''));

