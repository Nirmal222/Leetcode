/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let j = 0;
    for(let i=0;i<haystack.length;i++){
        if(needle[j] === haystack[i]){
            j++
            if(j==needle.length) return i-j+1
        }else {
            i=i-j
            j=0
        }
    }
    return -1
};