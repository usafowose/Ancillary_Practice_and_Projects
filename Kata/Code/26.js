// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
let dog = 5;
// return `I am a ${dog} year old`
// solution("camelCasing")  ==  "camel Casing"

const solution = str => {
  return [...str].reduce((acc, cv, i, arr) => {
    return (cv === cv.toUpperCase()) ? [...acc, ' ', cv] : [...acc, cv];
  }, []).join('');
}

console.log(solution("camelCaseCatAndDog")); 