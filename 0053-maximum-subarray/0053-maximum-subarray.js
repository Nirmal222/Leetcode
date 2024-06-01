/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity, sum = 0;
    for(let num of nums){
        sum+=num;
        max = Math.max(max, sum);
        if(sum<0){
            sum = 0
        }
    }
    return max
};