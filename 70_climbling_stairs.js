/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    var temp_one = 1,temp_two = 2,result;
    for(var i = 3;i < n+1 ;i++){
        result = temp_one + temp_two;
        temp_one = temp_two;
        temp_two = result;
        
    }
    return result;
};