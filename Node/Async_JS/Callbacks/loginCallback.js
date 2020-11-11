console.log('Start')

const login = (email = ``, password) => {
    setTimeout(() => {
        console.log(`Now we have the data`)
        return { userName: email }
    }, 3000)
}

let user = login('usafowose@gmail.com', 'hello');

console.log(user);

console.log(`Done`);

// ---------------------COMMENTS BEGIN----------------------------------

// The above code will return undefined for line 12 because the user data has not returned yet form the Timeout at the time of evaluation
// THen after it reads done and the time has passed, will tell us it has the data, but because we have already attemoted to log the user, we cannot access it. 
// The SOLUTION IS CALLBACKS BELOW
// BUT even below, we can see how dependency of a value by multiple functions can cause callback hell. We must keep nesting and waiting to retun values for subsequent functions. 
// ----------------------COMMENTS DONE--------------------------------------

console.log(`Take Two: Let's Begin`)

const login = (email = ``, password, returnUserCb) => {
    setTimeout(() => {
        console.log(`Now we have the data`);
        returnUserCb({ userName: email });
    }, 5000)
};

const getVideos = (email, returnVideoCb) => {
    setTimeout(() => {
        console.log(`Got Videos`);
        returnVideoCb([`video1`, `video2`, `video3`])
    }, 3000)
}

loginCallback('usafowose@gmail.com', 'hello', (user) => {
    console.log(user);
    getVideos(user.userName, (videos) => {
        console.log(videos);
        console.log(`Finished`);
    })
});







