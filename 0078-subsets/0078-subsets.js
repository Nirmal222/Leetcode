/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [], tempSet = [];
    function bt(ind, tempSet){
        res.push([...tempSet]);
        for(let i=ind;i<nums.length;i++){
            tempSet.push(nums[i]);
            bt(i+1, tempSet)
            tempSet.pop()
        }
    }
    bt(0, tempSet)
    return res
};