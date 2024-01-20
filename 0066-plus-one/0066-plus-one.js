/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for(let i=digits.length-1;i>=0;i--){
        let sum = digits[i] + carry;
        carry = Math.floor(sum/10);
        let rem = sum%10;
        digits[i] = rem
    }
    if( carry== 1) digits = [1, ...digits];
    return digits
};