/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var tof = false;
var exist = function(board, word) {

    //一些边界判断
    if(!(board || board[0] || board[0][0])){
        return false;
    }
    if(!word){
        return true;
    }
   
    var m = board.length;
    var n = board[0].length;
    var char = word[0];
    
    //生成一个  visited 的 boolean 矩阵
    var visited_item = [];
    var board_visited = [];
    for(var s = 0;s<n;++s){
        visited_item.push(false);
    } 
    for(var k = 0;k<m;++k){
        board_visited.push(visited_item);
    }
    
    
    for(var i = 0;i<m;++i){
        for(var j = 0;j<n;++j){
            if(board[i][j] == char){
                //扫矩阵每一个点
                var level = 0;
                //需要特殊的 矩阵 拷贝
                var visited_unique = JSON.parse(JSON.stringify(board_visited));
                DFS(board,i,j,word,level,visited_unique);
            }
            //时时刻刻 准备跳出循环
            if(tof === true) return true;
        }

        //同上
        if(tof === true) return true;
    }
    return tof;
};

var DFS = function(board,i,j,word,level,visited){

    //越界 直接跳出递归
     if( i<0 || i>board.length-1 || j<0 || j>board[0].length -1 || level > (word.length-1)){
         return;
     }

     //已访问过 跳出递归
     if(visited[i][j]){
        return;
     }else{
         //没有 就记录已经访问
       visited[i][j] = true;
     }

     //该字符 是否等于我们的 字符
    if( word[level] != board[i][j] ){
        return;
    }

    //如果字符串匹配完成  立即退出 且将全局标记 记为 true
    var len = word.length-1;
    if(level == len || board[i][j] == word[len]){
      tof = true;
      return;   
    }
    level++;

    //上下左右 搜索
    DFS(board,i+1,j,word,level,visited);
    DFS(board,i-1,j,word,level,visited);
    DFS(board,i,j+1,word,level,visited);
    DFS(board,i,j-1,word,level,visited);
};