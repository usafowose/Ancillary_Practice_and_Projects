const findPos = (A) => {
  let sortedPos = [...A].sort((a, b) => a - b).filter(cv => cv > 0)

  const [least, greatest] = [sortedPos[0], [...sortedPos].reverse()[0]];

  let i = 1
  while (i < greatest) {
    if (sortedPos.indexOf(i) !== -1) {
      i++
    } else {
      return i
    }
  }

}

let arr = [-3, -2, -1, 100000]

// let arr2 = [];
let start = 1
while (start < 99998) {
  arr.push(start)
  start++
}

console.log(findPos(arr));