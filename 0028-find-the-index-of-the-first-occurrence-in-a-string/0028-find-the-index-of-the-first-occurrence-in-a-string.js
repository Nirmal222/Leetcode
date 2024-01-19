/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let p1 = 0, p2 = 0;
    while(p1 < haystack.length){
        if(haystack[p1]===needle[p2]){
            if(p2 === needle.length-1) return p1-p2
            p2++
        }else{
            p1 = p1-p2
            p2 = 0
        }
        p1++
    }
    return -1
};