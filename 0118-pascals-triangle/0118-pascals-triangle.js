/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = [[1]];
    for (let i = 0; i < numRows - 1; i++) {
        let x = output[output.length - 1];
        let row = [1];
        for (let j = 1; j < x.length; j++) {
            row.push(x[j]+x[j-1])
        }
        row.push(1);
        output.push(row);
    }
    return output;
};