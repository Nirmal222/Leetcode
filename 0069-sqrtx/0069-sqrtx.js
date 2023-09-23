/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l=0,r=x;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(mid*mid<=x && (mid+1)*(mid+1)>x) return mid;
        else if(mid*mid<x) l = mid+1;
        else r = mid-1;
    }
};