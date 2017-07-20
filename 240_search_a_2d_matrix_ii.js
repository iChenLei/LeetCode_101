/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0){
        return false;
    }
    var x,y;
    var col = matrix.length;
    var row = matrix[0].length;
    if(col == 0 || row == 0){
        return false;
    }
    x = row - 1;
    y = 0; 

    //从右上角开始逼近我们的目标数字
    while(!(x == -1 || y == col )){
        if(target == matrix[y][x]){
            return true;
        }else if(target > matrix[y][x]){
            y++;
        }else{
            x--;
        }
    }
    return false;
};