function isValid(s) {
    // best cae O(N)
    // implement stack (diff for each symbol)
    // have mapping of closing to opening symbols
    // loop thru string, WITH EACH, checking if it is opening or closing and if the corresponding bracket exists.
    // there shuld never be closing symbol in stack, it should only remove existing opening symbols
    var charStack = [];
    var map = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    s.split('').forEach(function (char) {
        if (char === map[')']) {
            charStack.push(map[')']);
        }
        else if (char === map[']']) {
            charStack.push(map[']']);
        }
        else if (char === map['}']) {
            charStack.push(map['}']);
        }
        else {
            if (char === Object.keys(map)[0] || char === Object.keys(map)[1] || char === Object.keys(map)[2]) {
                if (!charStack.length || charStack[charStack.length - 1] !== map[char]) {
                    charStack.push(char);
                }
                else {
                    charStack.pop();
                }
            }
        }
    });
    
    return !charStack.length;
}
;
console.log(isValid(']'));
