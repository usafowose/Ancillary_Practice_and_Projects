const login = (email = ``, password) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Now we have something`)
            // reject(new Error(`We couldn't grab the data`))
            resolve({ userName: email })
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


const displayUser = async () => {
    try {
        const loggedUser = await login(`usafowose@gmail.com`, 12345)
        console.log(loggedUser)
        const videos = await getVideos(loggedUser.userName)
        console.log(videos)
        const vidTitle = await getVideoTitle(videos)
        console.log(vidTitle)
        const firstLetter = await getTitleFirstLetter(vidTitle[0])
        console.log(firstLetter)
    }
    catch (err) {
        console.log(err);
    }
}
