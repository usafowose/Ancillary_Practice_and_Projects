// FILTER, forEach, MAP, REDUCE

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

const howMany = (str) => {
  let arrofOccur = [];

  let unique = [...str].filter((cv, i, arr) => arr.indexOf(cv) === i)

  unique.forEach((cv, i, arr) => {
    arrofOccur.push(str.match(new RegExp(cv, 'g')))
  })

  return arrofOccur.map((currentVal, i) => ({ [currentVal[0]]: currentVal.length }))
    .reduce((acc, cv) => ({ ...acc, ...cv }), {})
}

console.log(howMany('isthisright'))