const login = (email = ``, password) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Now we have something`)
            reject(new Error(`We couldn't grab the data`))
            // resolve({ userName: email })
        }, 2000)
    })


const getVideos = (email = ``, password) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Got Videos`)
            resolve([`video1`, `video2`, `video3`])
        }, 2000)
    })

const getVideoTitle = (videos) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Got Video Title`)
            resolve(videos[0])
        }, 2000)
    })

const getTitleFirstLetter = (vidTitle) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Got Video First Letter`)
            resolve(vidTitle[0])
        }, 2000)
    })


// login(`usafowose@gmail.com`, `password`)
//     .then(result => getVideos(result.userName, `password`))
//     .then(result => getVideoTitle(result))
//     .then(result => getTitleFirstLetter(result))
//     .catch(err => console.log(err))


login(`usafowose@gmail.com`, `password`)
    .then(getVideos)
    .then(getVideoTitle)
    .then(getTitleFirstLetter)
    .catch(err => console.log(err))


