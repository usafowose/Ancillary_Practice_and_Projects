// In this code, we will add an asynchronous operation native to the JS Programming language, setTimeout(); 
// setTimeout is asynchronous and therefore non-blocking. 

console.log(`Starting Async Operation`);

setTimeout(() => console.log(`This is the main functionality of our program`), 2000);

console.log(`Program Completed`);

// setTimout schedules a callback for a later time relative to now (established in milliseconds by 2000 [two seocnds])
// Because JS is natively synchronous, we would expect the call stack to assess these statements top to bottom as such: 
// 1. `Starting Async Operation 
// 2. `This is the main functionality of our program`
// 3. `Program Completed`
//  but because setTimeout() is an async operation, the first line of code will be executed and the second will be scheduled. It will then move out of the way (non-blocking) for the last line of code to run, and then agfter the delay (2 seconds) will print out our `main fucnitonality` line