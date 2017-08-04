/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/**
 * 这题 动态规划
 * dp[i][j] = dp[i-1][j] + dp[i][j-1]
 *  在 i,j 处，到达这里的路径数 等于 到达右边和上边路径之和
 * 
 * 为了节约空间 直接 一维数组DP
 */
var uniquePaths = function(m, n) {
    var arr = [];
    for(var s = 0;s < n;s++){
        arr.push(1);
    }
    
    for(var i = 1 ;i < m; i++){
        for(var j = 1;j < n;j++){
            arr[j] += arr[j-1];
        }
    }
    
    return arr[n-1];
};