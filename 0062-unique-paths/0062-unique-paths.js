/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let DP = Array.from({ length: m }, () => Array(n).fill(0));
    function bt(i,j){
        if(i===m-1 && j===n-1){
            return 1;
        }
        if(i>=m || j>=n){
            return 0
        }
        if(DP[i][j]!==0){
            return DP[i][j]
        }
        let hor = bt(i,j+1);
        let ver = bt(i+1, j);
        DP[i][j] = hor+ver;
        return hor+ver;
    }
    return bt(0,0)
};