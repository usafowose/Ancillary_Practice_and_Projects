# Asynchronous Javascript: 
Asynchronous javascript allows us to take statements outside of the main program flow and avoids making the user waiting for a specific task to be completed by holding up the program for a response. If we make a request to a server or do anything else, async js allows us to continue with other computations/tasks while we await a response from the server. 

A good example of code running asynchronously can be seen on any popular website. Take Youtube, for example. When you search for something, as soon as you begin typing, suggestions are brought from the server asynchronously and returns data. This data is parsed and then the information on the screen is updated. The rest of the program doesn't freeze waiting for response. Similary, we do not get errors from our code used to parse the JSON server response because it will move on to other things and parse whenever the response is received. 

Another example is the native setTimeout() function in javscript. When we call a setTimeout() function with a delay, what happens is the setTimout() func is automatically popped out of our call-stack and allocated to a Web API/ Web Worker to handle this asynchronous function asynchoronously and the rest of our code is executed because our call-stack is now free. 

In contrast, synchronous code is what we call 'Blocking Code'. This does exactly what it sounds like it does. It blocks the rest of the code below it from executing until the blocking code itself has been executed. 

[Synchronous Example](./SyncVsAsync/sync.js)

[Asynchronous Example](./SyncVsAsync/async.js)

## Callbacks 
To make our code asynchronous, callbacks were introduced in Javascript. A callback function would handle the results of any code run and then give us that data when it is ready as opposed to returning a value prematurely (before we have it). The function tasked with receiving the data would take in any necessary parameters in addition to this callback which then handles this data when it is received. 

Callbacks became a popular method but soon presented a noticeable syntax problem. The problem arose when a callback, instead of only returning data, needed to perform more aynchronous tasks on that data. An example would be a program that can be found [here.](./Callbacks/loginCallback.js) 

The program requires the user to login. In order to login, the user must provide an email and password. The setTimeout() function in login() represents the time it takes to receive a response from the server that authenticates the user. Once this happens login responds with a user object containing the email as the userName. 

getVideos() is another asynchronous task that, upon receving a userObject, returns a list of videos on that user profile, for example. The async nature of this function requires another callback that handles this data. When called, these functions must be nested with their callbacks to give us the synchronous nature we desire in the application. We do not want the program to tell us that we have no videos simply because we are still waiting on the login function to return with a success message. Extensive nesting leads to "callback hell". The code becomes more and more undecipherable the more asynchronous operations we have. Consequentially, in the event of any errors, separate error-handling callbacks are needed which result in further nesting. Such code becomes extremely labyrinthine and hard to debug. 

This led us to Promises. 

## Promises

To handle asycnhronous operations more smoothly and avoid callback hell, [promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises) were introdcuced to javascript. A promise is simply an object that gives us either the result (in the case of success) of an asynchronous operation, or a failure scenario/error message (in the event of a failure) of an async operation. 

### In Concept
 The promise object serves as an intermediate state of an asynchronous operation. The word promise comes from the purpose of promises themselves. A promise (in js) serves the purpose of an actual promise to return some data to other processes that are waiting for this data or perform some action whenever it is loaded. The promise links the code that is grabbing the data (producing code) and the code that is awaiting the data (consuming code). 

 The promise itself transitions through multiple states: 

 1. While we await the data or the result of the producing code, our promise is in a 'pending' state and our result is 'undefined'.
 
 2. If data comes back and we resolve the promise, then the state of our promise is now 'fulfilled' and result is whatever our producing code returns. 
 
 3. In the event of any errors and promise rejection, our promise moves to a 'rejected' state and our result is an error. 

 It is important to know that the purpose of promises themselves is to handle an asynchronous task gracefully regardless of the result. In the event odf errors in an async operation, we still wouldn't want our program to stop because of an error. Promises allow us to choose how to handle these errors and continue with program execution. 



### In Action
 Promisies are implemented using the 'new' keyword. The Promise takes in an executor function as a callback. This executor function has two arguments which, in common practice, are called resolve and reject. 

 The resolve parameter is used in the event of a promise resolution or returned data. on the contrary, the reject param is to return a rejected state of a promise on the event 

 ```js
 const fulfilledExecutor = (resolve, reject) => {
     setTimeout(() => {
         resolve(`We got the data`)
     }, 2000)
 }

const rejectedExecutor = (resolve, reject) => {
    setTimeout(() => {
        reject(new Error(`Something went wrong`))
    }, 2000)
}
 const fulfilledPromise = new Promise(fulfilledExecutor)
 const rejectedPromise = new Promise(rejectedExecutor)

 console.log(fulfilledPromise) //expect a return value of type string after two seconds: `We got the data`

 console.log(rejectedPromise) //expect an error message to be returned after two seconds : `Something went wrong`

 ```

Another elementary but logical implementation of promises can be seen [here](./Promises/promise2.js). 
For further understanding, you can view the refactoring of our [login callbacks using promises here](./Promises/loginPromise.js)

## Async/Await

Async-Await was introduced in Javascript ES8 as only a syntactic feature that allowed asynchronous operations to be structured in a synchronous way. 

### Implementation
Async-Await functions are declared by using the async keyword in the declaration of functions. Async functions must return a promise or promise-like response. 

Here is an example of rewriting an asynchronous operation that uses thenables (.then()) into an asynchronous function using async/await syntax. 
```js 
// NORMAL SYNTAX 
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('no-such-user.json')
  .catch(alert)


// USING ASYNC AWAIT

const loadJson = async (url) => {
  try{
    let response = await fetch(url);
    response.status === 200 ? await response.json() : throw new Error(response.status)
  } catch (err) {
    alert(err)
  }
}

loadJson('no-such-user.json') // ERROR HANDLING OCCURS INSIDE FUNCTION
```


