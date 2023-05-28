function solution(a) {
    var b = [];
    var startingIndex = 0;
    var endingIndex = a.length - 1;
    while (startingIndex <= endingIndex) {
        if (startingIndex === endingIndex) {
            b.push(a[startingIndex]);
            break;
        }
        b.push(a[startingIndex]);
        b.push(a[endingIndex]);
        startingIndex++;
        endingIndex--;
    }
    var sorted = true;
    for (var i = 0; i < b.length - 1; i++) {
        if (b[i] > b[i + 1]) {
            sorted = false;
            break;
        }
    }
    return sorted;
}
console.log(solution([1, 4, 5, 6, 3]));
