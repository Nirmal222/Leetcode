/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let binNum = n.toString(2), sum = 0;
    console.log(typeof binNum)
    for(let i=0; i<binNum.length; i++){
        if(binNum[i]==1) sum++;
    }
    return sum;
};