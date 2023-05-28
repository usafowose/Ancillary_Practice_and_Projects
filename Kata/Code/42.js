function lengthOfLongestSubstring(s) {
    var substrings = [];
    var longest = 0;
    var currSubstr = [];
    var si = 0;
    while (si < s.length - 1) {
        for (var i = si; i < s.length; i++) {
            if (currSubstr.indexOf(s[i]) < 0) {
                currSubstr.push(s[i]);
            }
            else {
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
}
;
console.log(lengthOfLongestSubstring('pwwkew'));
