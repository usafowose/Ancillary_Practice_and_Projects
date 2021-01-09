// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

const unCamelCase = str => [...str].reduce((acc, cv, i, arr) => cv == cv.toUpperCase() ? [...acc, ' ', cv] : [...acc, cv], []).join('')


console.log(unCamelCase('camelCasingEveryDayBabyyyyY'))