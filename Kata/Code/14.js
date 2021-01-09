// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// -------EXAMPLE--------------
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// solution('hellofriends', 'ends') // returns true


// ----THOUGHTS---
// 

const endsIn = (str, ending) => {
    console.log('Index Of First Occurence of Ending :' + str.indexOf(ending));
    console.log(ending.length)
    console.log(str.length)

    const newSearchStart = str.indexOf(ending) + (ending.length - 1)


    const checkFirstOrEnd = () => (str.length !== str.indexOf(ending) + (ending.length)) ? str.indexOf(ending, newSearchStart) : false

    checkFirstOrEnd() === -1 && (str.length === str.indexOf(ending) + (ending.length)) ? console.log(true) : checkFirstOrEnd() === -1 ?



    // console.log(str.indexOf(ending, newSearchStart)) 

    // const finalCheck = () => (str.indexOf(ending) + (ending.length) === str.length) ? console.log(true) : console.log(false)

}

endsIn('aabcthbc', 'bc')