/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = nums.reduce((a,c)=>a+c, 0);
    let sumN = (nums.length*(nums.length+1))/2;
    return sumN-sum
};
