/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let map = {};
    while(map[n] !== 1){
        map[n] = 1;
        n = sumIt(n)
        if (n==1) return true
    }
    return false
};

function sumIt(n){
    let total = 0
     while(n>0){
         let rem = n%10;
         total = total + (rem*rem)
         n = Math.floor(n/10)
     }
    return total
}