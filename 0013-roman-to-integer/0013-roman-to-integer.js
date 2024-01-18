/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    let result = 0;
    for(let i=0;i<s.length;i++){
        if(obj[s[i+1]]>obj[s[i]]){
            result = result + obj[s[i+1]]-obj[s[i]]
            i++
        }else{
            result = result + obj[s[i]]
        }
    }    
    return result;
};