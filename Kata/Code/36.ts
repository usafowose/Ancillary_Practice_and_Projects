// function(["mobile","mouse","moneypot", "monitor", "mousepad"], "mouse")
// 

const searchRes = (terms: string[], searchVal: string): string[][] => {
  const results: string[][] = [];
  for (var i = 2; i < searchVal.length; i++) {
    let newSearch = searchVal.substring(0, i);
    results.push(terms.sort().filter(cv => {
      return cv.indexOf(newSearch) > -1;
    }).length > 0 ? terms.sort().filter(cv => {
      return cv.indexOf(newSearch) > -1;
    }) : [] );
  }

  return results.map((cv, i, arr) => {
    if (cv.length > 3){
      var [a, b, c, ..._] = cv;
      return [a, b, c];
    }
    return cv;
  });
}

console.log(searchRes(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mo"));