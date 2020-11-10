// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


const jadenCase = (str) => {
    return str.split(" ").map(word => {
        let [firstLetter, ...rest] = word;
        word = [firstLetter.toUpperCase(), ...rest];
        return (word.join(''))
    }).join(' ')
};  //PURE FUNCTION a)takes input b).mutates a COPY of the input c).returns a val
// -----------------------------------------------------------------------------------------------------------------------------------
String.prototype.toJadenCase = function () {
    return this.split(" ").map(([firstLetter, ...rest]) => {
        return [firstLetter.toUpperCase(), ...rest].join('');
    }).join(' ')
}; // IMPURE (takes no input); 

let str = "Hello lovely people"
let str2 = 17 //wont work for second fn because it specifies str. prototype

console.log(str.toJadenCase());

String.prototype.toJadenCase = () => {
    return this.split(' ').map(([firstLetter, ...rest]) => {
        return [firstLetter.toUpperCase(), ...rest].join('')
    }).join(' ')
}

