/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0, r=height.length-1, maxVol = 0;
    while(l<r){
        let h1 = height[l], h2 = height[r];
        let maxHeight = Math.min(h1, h2);
        let vol = (r-l) * maxHeight;
        maxVol = Math.max(maxVol, vol)
        if(h1>h2)r--;
        else l++
    }
    return maxVol;
    // 1 8 6 2 5 4 8 3 7
       // l               r
       // vol = 1 * 8
       // vol = 
};