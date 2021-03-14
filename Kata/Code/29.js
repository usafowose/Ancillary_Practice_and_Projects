// We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

// For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

// Examples:
// doubleton(120) === 121
// doubleton(1234) === 1311
// doubleton(10) === 12

const doubleton = (num = 1) => {
    let numArrray = num.toString().split(''); 
    // numArrray.sort((a,b) => a-b); 
    console.log(numArrray);
}

doubleton(254); 

//120 === 121
//1234 === 1311
// 10 === 12
// 3487 === 3533
// 3847 === 3883
// 4321 === 4333

// if two nums, return NEXT int with unique chars
//take out first two numbers -- save these 
// find the smallest int of these two
// if next/third digit is less than smallest, next num = smallest. 
// if next/third is greater than smallest && is 
// 