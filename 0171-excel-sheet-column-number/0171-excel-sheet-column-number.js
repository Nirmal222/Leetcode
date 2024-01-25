/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let power = columnTitle.length-1, res = 0, p = 0;
    while(p<columnTitle.length){
        let char = columnTitle[p]
        res = res + (26**power) * (char.charCodeAt()-64);
        p++;
        power--;
    }
    return res
};