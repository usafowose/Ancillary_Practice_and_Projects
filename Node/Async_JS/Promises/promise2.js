const fulfilledPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: `This data was returned` })
    }, 2000)
})

fulfilledPromise.then(result => console.log(result));






const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error(`Data was not returned`))
    }, 2000)
})

rejectedPromise.then(null, (err) => console.log(err))