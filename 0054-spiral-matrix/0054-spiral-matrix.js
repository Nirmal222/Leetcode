/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let l = 0, r = matrix[0].length-1;
    let t = 0, b = matrix.length-1;
    let res = [], total = matrix.length * matrix[0].length;
    while(l<=r && t<=b && res.length<total){
        for(let i = l;i<=r && res.length<total;i++){
            res.push(matrix[t][i])
        };
        t++;
        for(let i = t;i<=b && res.length<total;i++){
            res.push(matrix[i][r])
        };
        r--;
        for(let i = r;i>=l && res.length<total;i--){
            res.push(matrix[b][i])
        };
        b--
        for(let i = b;i>=t && res.length<total;i--){
            res.push(matrix[i][l])
        };
        l++
    }
    return res;
};