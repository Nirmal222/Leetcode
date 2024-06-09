/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = new Array(s.length+1).fill(0);
    dp[0] = 1;
    dp[1] = s[0]==='0' ? 0: 1;
    for(let i=2;i<=s.length;i++){
        let singleDigit = s[i-1];
        let twoDigit = s[i-2]+s[i-1];
        console.log(singleDigit, twoDigit)
        if(Number(singleDigit)>0){
            dp[i]+=dp[i-1]
        }
        if(Number(twoDigit)>=10 && Number(twoDigit)<=26){
            dp[i]+=dp[i-2]
        }
    }
    return dp[s.length]
};