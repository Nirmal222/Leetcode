/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let DOB = 0,max = 0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]-prices[DOB]<0){
            DOB = i
        }else{
            max = Math.max(prices[i]-prices[DOB], max)
        }
    }
    return max
};