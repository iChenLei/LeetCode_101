/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//这个是好理解的dp
var uniquePaths = function(m, n) {
   var dp_item = [];
   var dp = [];
    for(var i = 0;i<n;i++){
        dp_item.push(0);
    }
    for(var j = 0;j<m;j++){
        dp.push(dp_item);
    }
    
    for(var i = 0;i<m;i++){
        for(var j = 0;j<n;j++){
            //dp起点
            if(i == 0 && j == 0) { dp[i][j] = 1; }
            //dp 横轴 和 纵轴 总有一个为0
            else if(i == 0 && j > 0 ){dp[i][j] = dp[i][j-1];}
            else if(i > 0 && j == 0 ){dp[i][j] = dp[i-1][j];}
            //dp  这里就是我们的递归表达式
            else{dp[i][j] = dp[i][j-1] + dp[i-1][j]; }
        }
    }
    
    // == dp[m][n]
    return dp.pop().pop();
};