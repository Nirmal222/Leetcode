/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 1;
    for(let i=1;i<nums.length;i++){
        if(j===1 || nums[i]!==nums[j-2]){
            nums[j++]=nums[i]
        }
    }
    return j
};