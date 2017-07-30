/**
 * @param {character[][]} grid
 * @return {number}
 */

/**
 * 算法核心思想  举例说明
 * 
     Matrix           Matrix_visited

    11000       false false false false false
    11000  ===> false false false false false  
    00100       false false false false false
    00011       false false false false false
                             |
                             v
                【true】  【true】  false false false            
    0           【true】  【true】  false false false
  counter+1     false false false false false
                false false false false false      bfs第一次
                            |
                            v
                true  true  false false false            
     1          true  true  false false false
  counter+1     false false【true】 false false    bfs第二次
                false false false false false
                            |
                            v
                true  true  false false false            
      2         true  true  false false false  
   counter+1    false false false false false      bfs第三次
                false false false 【true】 【true】
*/
var numIslands = function(grid) {

    //这里注意一点  
    /**
     *  var a = [];
     *  a === []  =>  false  
     *  a == []  => false
     *  所以判断数组是否为空 直接!grid.length 
     */
    if(!grid.length) return 0;

    //所以下面这些代码 有bug
    if(grid === [] || grid === [[]] || grid === null )return 0;

    //岛屿计数器
    var counter = 0;

    //矩阵的长宽
    var m = grid.length;
    var n = grid[0].length;
    var grid_visited = [];

    //下面是构成 m*n 的访问记录矩阵
    for(var i = 0;i<m;++i){
        grid_visited.push([]);
    }
    
    for(var s = 0;s<m;++s){
        for(var k = 0;k<n;++k){
            grid_visited[s].push(false);
        }
    }
    

    //扫一遍整个矩阵
    for(var s = 0;s<m;++s){
        for(var k = 0;k<n;++k){
            //没有访问到的 【1】 点 就活产生一个矩阵
            if(grid[s][k] === '1' && !grid_visited[s][k]){
                //将周围的 【1】 点 全部访问到
                bfs(grid,grid_visited,s,k);
                counter++;
            }
        }
    }
    return counter;
};


//这里是重点  将周围的节点全部访问  并记录true
var bfs = function(grid,grid_visited,i,j){

    //可以这么做 
    /**
     * 也可以   if(ij坐标没有越界 && 节点没有访问到 && 节点值=="1"){
     *                  [i][j]节点变为已经访问过(true);
     *          }
     *          if(i+1,j不越界 && 节点值=="1"){bfs(grid,gird_visited,i+1,j)}
     *          if(i-1,j不越界 && 节点值=="1"){bfs(grid,gird_visited,i-1,j)}
     *          if(i,j+1不越界 && 节点值=="1"){bfs(grid,gird_visited,i,j+1)}
     *          if(i,j-1不越界 && 节点值=="1"){bfs(grid,gird_visited,i,j-1)}
     */
    if(i<0 || i>grid.length-1) return;
    if(j<0 || j>grid[0].length - 1) return;
    if(grid[i][j] !== '1' || grid_visited[i][j]) return;
    grid_visited[i][j] = true;
    bfs(grid,grid_visited,i-1,j);
    bfs(grid,grid_visited,i+1,j);
    bfs(grid,grid_visited,i,j-1);
    bfs(grid,grid_visited,i,j+1);
}