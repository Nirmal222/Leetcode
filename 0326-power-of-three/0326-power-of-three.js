/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n<=0) return false;
    let power = Math.log10(n)/Math.log10(3);
    if(power-Math.floor(power)===0) return true;
    else return false
};