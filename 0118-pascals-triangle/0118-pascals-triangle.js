/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = [[1]];
    for(let i=1;i<numRows;i++){
        let row = [];
        row.push(1)
        let pre = output[output.length-1];
        for(let j = 1;j<pre.length;j++){
            row.push(pre[j]+pre[j-1])
        }
        row.push(1)
        output.push(row)
    }
    return output
};