/**
 * @param {number} n
 * @return {number}
 */

/** Catalan number 
 *  卡塔兰数没有斐波契那知名 
 *  感觉这个 不像是靠算法 更像是数学
 *  规律就是 Cn+1 = 求和Ci*Cn-i
 */
var numTrees = function(n) {
    var array = new Array(n).fill(0);
    array[0] = 1;
    array[1] = 1;
    
    for(var i = 2;i<=n;++i){
        //这里需要置零  比较重要的操作
        array[i] = 0;
        for(var j = 0;j<i;++j){
            array[i] += array[j]*array[i-j-1];
        }
    }
    
    return array[n];
};