/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var len = triangle.length;
    var dp = triangle[len-1];
    
    for(var i = len - 2;i>=0;--i){
        for(var j = 0;j<=i;j++){
            dp[j] = Math.min(dp[j],dp[j+1]) + triangle[i][j];
        }
    }
        
    return dp[0];
};