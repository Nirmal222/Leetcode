/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {};
    for(let str of strs){
        let str1 = str.split('');
        str1.sort();
        if(obj[str1]===undefined) obj[str1] = [ str ];
        else obj[str1].push(str);
    }
    let res = [];
    for(let i in obj){
        res.push(obj[i])
    }
    return res
};