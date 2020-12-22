// Given an integer, write a function that returns true if the given number has no consecutive digits else returns false. For example 12345678 returns true while 23452338 returns false as does 200. Numbers should have no size limit.

const noConsecutiveInt = (num = 101) => {
    num = BigInt(num)
    let mappedforConsecutive = num.toString().split("").map((cv, index, arr) => (arr[index + 1]) === cv ? false : !arr[index + 1] ? cv : cv)
    console.log(mappedforConsecutive)
    return mappedforConsecutive.indexOf(false) === -1 ? true : false
}

console.log(noConsecutiveInt(313131313131313131))