/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    for(let i=0;i<32;i++){
        let msb = (n>>31) & 1;
        n = n<<1;
        result = result | (msb<<i);
    }
    return result>>>0
};