/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


//具体的算法可以用下面的图示理解

/**
 *      X X X X                X X X X               X X X X
 *      X O O X   ==========>  X O O X   =========>  X X X X
 *      X X O X   (第一次深搜)  X X O X   (第二次扫)   X X X X
 *      X O X X                X # X X               X O X X
 */


var solve = function(board) {

    //扫了整个矩阵 其实不需要扫所有  只需要扫四条边 这里偷懒了
    for(var i = 0;i<board.length;++i){
        for(var j = 0;j<board[i].length;++j){
            if((i == 0 || j == 0 || i == board.length - 1 || j == board[i].length -1 )&&(board[i][j] === 'O')){
                solveDFS(board,i,j);
            }
        }
    }
    

    //扫整个矩阵  遇到"#"的转化为"O"  遇到"O"转化为"X"
    for(var i = 0;i<board.length;++i){
        for(var j = 0;j<board[i].length;++j){
            if(board[i][j] === 'O') board[i][j] = 'X'; 
            if(board[i][j] === '#') board[i][j] = 'O'; 
        }
    }
};


var solveDFS = function(board,i,j){
    if(board[i][j] === 'O'){

        //将深搜到的周围的 ==="O"的 变为 "#"
        board[i][j] = '#';

        //搜索上下左右的点  需要if判断是否可以去搜索
        if((i>0)&&(board[i-1][j] === 'O')){ solveDFS(board,i-1,j);}
        if((i<board.length-1)&&(board[i+1][j] === 'O')){ solveDFS(board,i+1,j);}
        if((j>1)&&(board[i][j-1] === 'O')){ solveDFS(board,i,j-1);}
        if((i<board[i].length-1)&&(board[i][j+1] === 'O')){ solveDFS(board,i,j+1);}
    }
}