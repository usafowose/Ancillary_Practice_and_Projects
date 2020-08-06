const rl = require('readline'); 
const fs = require('fs'); 

// ------------------------------------------METHOD 1

// const interface = rl.createInterface({
//     input: fs.createReadStream('./readable_1.txt')
// }); 


// var printLine = (fileLine) => {
//     console.log(`This line says ${fileLine}`); 
// }

// interface.on('line', printLine); 

// --------------------------------------------------------METHOD 2

// fs.readFile('./readable_1.txt', 'utf-8', (err, data) => {
//     if (err) {throw err}; 
//     console.log(data); 
// }); 
// ---------------------------------------------------------METHOD 3
fs.createReadStream('./readable_1.txt', {
    bufferSize: 4 * 1024
}).addListener('data', (err, chunk) => {
    if (err) {throw err};
    console.log(chunk); 
}); 
    