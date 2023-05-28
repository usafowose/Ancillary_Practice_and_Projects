function lengthOfLongestSubstring(s: string): number {
  let substrings: string[][] = [];
  let longest: number = 0;

  let currSubstr: string[] = [];
  let si = 0;
  while (si < s.length - 1) {
      for (let i = si; i < s.length; i++) {
          if (currSubstr.indexOf(s[i]) < 0) {
              currSubstr.push(s[i]);
          } else {
              break;
          }
      }
      if (longest < currSubstr.length) {
          longest = currSubstr.length;
      }
      substrings.push(currSubstr);
      currSubstr = [];
      si++;
  }

  return longest;
};

console.log(lengthOfLongestSubstring('pwwkew'));