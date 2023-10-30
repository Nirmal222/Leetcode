/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l=0, r=0, longest=0, charSet = {};
    while(r<s.length){
        if(s[r] in charSet){
            l = Math.max(l, charSet[s[r]]+1)
        }
        charSet[s[r]] = r;
        longest = Math.max(longest, r-l+1);
        r++
    }
    return longest
};