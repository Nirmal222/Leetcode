/**
 * @param {number} x
 * @return {number}
 */
// 0 1 
// l r
var mySqrt = function(x) {
    let l = 0, r = x;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(mid*mid>x){
            r = mid-1
        }else if(mid*mid<x){
            if((mid+1)*(mid+1)>x && mid*mid<=x) return mid
            l = mid+1
        }else{
            return Math.floor(mid)
        }
    }
    return Math.floor(l)
};