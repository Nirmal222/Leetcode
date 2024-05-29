/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l=0, r = nums.length-1, lo=-1, ro=-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid]>target){
            r=mid - 1
        }else if(nums[mid]<target) l=mid+1
        else{
            lo=mid;
            r=mid-1
        }
    }
    l=0, r=nums.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid]<target){
            l=mid+1
        }else if(nums[mid]>target)r = mid-1
        else {
            ro=mid;
            l=mid+1
        }
    }
    return [lo,ro]
};