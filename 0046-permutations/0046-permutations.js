/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [], n = nums.length;
    function bt(CI, nums){
        if(CI===n-1){
            let perm = [];
            for(let i=0;i<n;i++){
                perm.push(nums[i])
            }
            res.push(perm);
            return;
        }
        for(let i=CI;i<n;i++){
            swap(CI, i, nums);
            bt(CI+1, nums)
            swap(CI, i, nums);
        }
    }
    function swap(CI, I, nums){
        [nums[CI], nums[I]] = [nums[I], nums[CI]];
    }
    bt(0, nums)
    return res;
};