/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    
    for(var i = 0;i<m;i++){
        for(var j = 0;j<n;j++){
            //遇到障碍 这里的节点 置零！！
            if(obstacleGrid[i][j] == 1){obstacleGrid[i][j] = 0;}
            //其它的和 No.62 问题操作没有差异
            else if(i == 0 && j == 0){obstacleGrid[i][j] = 1;}
            else if(i > 0 && j == 0){obstacleGrid[i][j] = obstacleGrid[i-1][j];}
            else if(i == 0 && j > 0){obstacleGrid[i][j] = obstacleGrid[i][j-1];}
            else{obstacleGrid[i][j] = obstacleGrid[i][j-1] + obstacleGrid[i-1][j];}
        }
    }
    
    return obstacleGrid.pop().pop();
};