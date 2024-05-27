/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res = [];
    let phoneNumbers = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7:"qprs", 8: "tuv", 9: "wxyz" }
    function bt(i, str){
        if(str.length == digits.length){
            res.push(str)
            return 
        }
        for(let c of phoneNumbers[digits[i]]){
            bt(i+1, str+c)
        }
    }
    if(digits) bt(0, "");
    return res
};