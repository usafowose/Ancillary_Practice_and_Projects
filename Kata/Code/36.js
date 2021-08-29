// function(["mobile","mouse","moneypot", "monitor", "mousepad"], "mouse")
// 
var searchRes = function (terms, searchVal) {
    var results = [];
    var _loop_1 = function () {
        var newSearch = searchVal.substring(0, i);
        results.push(terms.sort().filter(function (cv) {
            return cv.indexOf(newSearch) > -1;
        }));
    };
    for (var i = 2; i < searchVal.length; i++) {
        _loop_1();
    }
    return results.map(function (cv, i, arr) {
        if (cv.length > 3)
            var a = cv[0], b = cv[1], c = cv[2], _ = cv.slice(3);
        return [a, b, c];
    });
};
console.log(searchRes(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mou"));
