function isValid(s: string): boolean {
  // best cae O(N)
  // implement stack (diff for each symbol)
  // have mapping of closing to opening symbols
  // loop thru string, WITH EACH, checking if it is opening or closing and if the corresponding bracket exists.
      // there shuld never be closing symbol in stack, it should only remove existing opening symbols
  const charStack: string[] = [];
  const map: Record<string, string> = {
      ")": "(",
      "]": "[",
      "}": "{",
  };

  s.split('').forEach(char => {
      if (char === map[')']){
          charStack.push(map[')']);
      } else if (char === map[']']) {
          charStack.push(map[']']);
      } else if (char === map['}']) {
          charStack.push(map['}']);
      } else {
          if (char === Object.keys(map)[0] || char === Object.keys(map)[1] || char === Object.keys(map)[2] ) {
              if (!charStack.length || charStack[charStack.length - 1] !== map[char]) {
                  return false;
              } else {
                  charStack.pop();
              }
          }
      }
  });

  return !charStack.length;
};

console.log(isValid(']'));