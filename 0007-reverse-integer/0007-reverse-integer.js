/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0;
  while(x!==0){
    let lastDigit = x%10;
    res = res * 10 + lastDigit
    x = Math.trunc(x/10);
    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
        return 0;
    }
  }
console.log(Math.trunc(1002.342))
  return res;
};