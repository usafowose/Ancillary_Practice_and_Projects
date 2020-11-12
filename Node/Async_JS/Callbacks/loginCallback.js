// console.log('Start')

// const login = (email = ``, password) => {
//     setTimeout(() => {
//         console.log(`Now we have the data`)
//         return { userName: email }
//     }, 3000)
// }

// login('usafowose@gmail.com', 'hello');
// const getVideos = (user) => {
// setTimeout(() => {

// })
// }
// console.log(`Done`);



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

const getVideoTitle = (video, callback) => {
    setTimeout(() => {
        console.log(`Video Title Has Come In`)
        callback(video[0])
    }, 4000)
}

const getTitleFirstLetter = (title, callback) => {
    setTimeout(() => {
        console.log(`The title has come back`)
        callback(title[0]);
    }, 3000)
}

login('usafowose@gmail.com', 'password', (user) => {
    console.log(user);
    getVideos(user.userName, (videos) => {
        console.log(videos);
        getVideoTitle(videos, (title) => {
            console.log(`The Video Title Is: ${title}`);
            getTitleFirstLetter(title, (firstLetter) => {
                console.log(`First Letter Returned`)
                console.log(`First Letter of ${title} is: "${firstLetter.toUpperCase()}"`)
            })
        })
    })
});







