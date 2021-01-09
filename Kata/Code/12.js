// Given an integer, write a function that returns true if the given number is palindrome, else false. For example, 12321 is palindrome, but 1451 is not palindrome.

const isPalindrome = (num = 3210123) => +([...num.toString()].reverse().join('')) === num ? true : false

console.log(isPalindrome())