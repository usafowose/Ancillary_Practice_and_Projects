// Synchronous Code
const secondConsole = () => console.log('This is the second task: `The main functionality of our program`')

console.log('Begin Synchronous Task');

secondConsole();

console.log('End synchronous task: `Program Completed`')

// Because this is synchronous, as is JS as a programming language, we expect the code to run from the top to bottom. 
// Our exected output is: 
// 1. 'Begin Synchronous Task'
// 2. 'This is the second task: `The main functionality of our program`'
// 3. 'End synchronous task: `Program Completed`'