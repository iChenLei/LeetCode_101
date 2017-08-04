/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    
    var dp_item = [];
    var dp = [];

    //初始化一个 m*n 矩阵
    for(var i = 0;i<n;i++){
        dp_item.push(0);
    }
    for(var j = 0;j<m;j++){
        dp.push(dp_item);
    }
    
    //左上角值等于 原数组的 值
    dp[0][0] = grid[0][0];

    //很好理解 横纵坐标 值 等于当前值 + 前一个值
    for(var i = 1;i<n;i++){
        dp[0][i] = grid[0][i] + dp[0][i - 1];
    }
    for(var i = 1;i<m;i++){
        dp[i][0] = grid[i][0] + dp[i-1][0];
    }
    
    //dp公式  dp[i][j] = grid[i][j] + Math.min(dp[i-1][j],dp[i][j-1])
    for(var i = 1; i < m; ++i) {
            for(var j = 1; j < n; ++j){
                dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
            }
    }
    return dp[m-1][n-1];
};