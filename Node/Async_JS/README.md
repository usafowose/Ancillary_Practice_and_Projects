# Asynchronous Javascript: 
Asynchronous javascript allows us to take statements outside of the main program flow and avoids making the user waiting for a specific task to be completed by holding up the program for a response. If we make a request to a server or do anything else, async js allows us to continue with other computations/tasks while we await a response form the server. 

A good example of code running asynchronously can be seen on any popular website. Take Youtube, for example. When you search for something, as soon as you begin typing, suggestions are brought from the server asynchronously and returns data. This data is parsed and then the information on the screen is updated. The rest of the program doesn't freeze waiting for response. Similary, we do not get errors from our code used to parse the JSON server response because it will move on to other things and parse whenever the response is received. 

In contrast, synchronous code is what we call 'Blocking Code'. This does exactly what it sounds like it does. It blocks the rest of the code below it from executing until the blocking code itself has been executed. 

[Synchronous Example](./SyncVsAsync/sync.js)

[Asynchronous Example](./SyncVsAsync/async.js)