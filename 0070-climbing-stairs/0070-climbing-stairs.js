/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dp = []
    function dpt(n){
        if(dp[n]) return dp[n]
        if(n==0) return 1
        if(n<0) return 0
        return dp[n] = dpt(n-1)+dpt(n-2)
    }
    return dpt(n)
};

