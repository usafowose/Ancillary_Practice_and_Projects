var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function calPoints(operations) {
    var opsCopy = __spreadArray([], operations, true);
    var record = [];
    var totalScore = 0;
    for (var i = 0; i < opsCopy.length; i++) {
        var op = opsCopy[i];
        if (isNaN(Number(op))) {
            if (op === 'C') {
                record.pop();
            }
            else if (op === 'D') {
                record.push(2 * record[record.length - 1]);
            }
            else {
                record.push(record[record.length - 1] + record[record.length - 2]);
            }
        }
        else {
            record.push(op);
        }
    }
    return record.reduce(function (a, b) { return a + b; }, 0);
}
;
console.log(calPoints(["5", "2", "C", "D", "+"]));
