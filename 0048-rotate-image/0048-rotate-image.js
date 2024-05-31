/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i=0;i<matrix.length;i++){
        for(let j= i+1;j<matrix.length;j++){
            swap(i,j, matrix)       
        }
    }
    for(let i=0;i<matrix.length;i++){
        matrix[i].reverse()
    }
    
    
    
    function swap(i,j,matrix){
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
    
    return matrix
};