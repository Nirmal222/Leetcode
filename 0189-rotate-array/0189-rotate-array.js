/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
 nums.reverse();
    k = k % nums.length;
    let last = k - 1;
    let i = 0;
    while(i < last) {
        [nums[i], nums[last]] = [nums[last], nums[i]];
        last--;
        i++;
    }
    last = nums.length - 1;
    i = k;
    while(i < last) {
        [nums[i], nums[last]] = [nums[last], nums[i]];
        last--;
        i++;
    }
};