
let certificates = [];

const nodeExecutor = (resolve, reject) => {
    let completionCert = {
        name: "Andrew",
        subject: "Node",
        dateCompleted: Date.now()
    }
    completionCert ? (resolve("Node Completed"), certificates.push(completionCert)) : reject("Node Not Completed. Keep Studying");
};

const expressExecutor = (resolve, reject) => {
    let completionCert = {
        name: "Andrew",
        subject: "Express",
        dateCompleted: Date.now()
    };

    completionCert ? (resolve("Express Completed"), certificates.push(completionCert)) : reject("Express Not completed")
}

const mongoExecutor = (resolve, reject) => {
    let completionCert = {
        name: "Andrew",
        subject: "Mongo",
        dateCompleted: Date.now()
    }

    completionCert ? (resolve("Mongo Completed"), certificates.push(completionCert)) : reject("Mongo Not Completed")
}

const allPromises = [new Promise(nodeExecutor), new Promise(expressExecutor), new Promise(mongoExecutor)];

Promise.all(allPromises).then(res => {
    console.log(res);
    //     console.log(`Promise Outputs -- \n ------------------\n ${res[0]} \n ${res[1]} \n ${res[2]}`);
})

console.log(certificates); 