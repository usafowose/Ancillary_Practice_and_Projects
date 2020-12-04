function getInParallel(apiCalls) {
    // let prom = []
    // apiCalls.forEach(element => console.log(element())); 
    // console.log(prom)
  }
  
  let promise = getInParallel([() => Promise.resolve("First API call!"),
                               () => Promise.resolve("Second API call!")]);
  if(promise) {
    promise.then((result) => console.log(result)).catch((err) => console.log(err));
  }
  module.exports.getInParallel = getInParallel;