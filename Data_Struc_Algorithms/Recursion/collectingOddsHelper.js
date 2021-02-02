const collectOdds = (arr = [1]) => {
  let result = [];

  const findOddsHelper = (helperInput) => {
    if (helperInput.length === 0) return

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    findOddsHelper(helperInput.slice(1))
  }

  findOddsHelper(arr)
  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 13]))
