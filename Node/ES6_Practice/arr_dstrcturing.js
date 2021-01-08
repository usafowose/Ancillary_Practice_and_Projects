const students = ['Andrew', 'Issi', 'Colin', 'Farah'];

var [, , , notYet] = students;

console.log(notYet); 

let peaks = ['Me', 'You']; 
let no = ['You', 'Me']; 
let noPeaks = [...peaks, ...no, ...students]; 
console.log(noPeaks)
console.log(noPeaks.join())