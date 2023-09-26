/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0,l = 0, r = 0;
    while(r<prices.length){
        if(l==r)r++;
        else{
            if(prices[r]>prices[l]){
                max = Math.max(max,prices[r]-prices[l])
                r++
            }else{
                l++
            }
        }
    }
    return max
};