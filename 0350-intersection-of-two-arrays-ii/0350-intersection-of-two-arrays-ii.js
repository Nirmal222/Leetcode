/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};
    for(let i=0;i<nums1.length;i++){
        if(!map[nums1[i]]) map[nums1[i]] = 1;
        else map[nums1[i]]++;
    }
    let arr = [];
    for(let i=0;i<nums2.length;i++){
        if(map[nums2[i]] && map[nums2[i]]>0){
            map[nums2[i]]--;
            arr.push(nums2[i])
        }
    }
    return arr
};