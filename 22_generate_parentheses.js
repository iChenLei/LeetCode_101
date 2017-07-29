/**
 * @param {number} n
 * @return {string[]}
 */

// 反正就是深搜
var generateParenthesis = function(n) {

    //核心问题是 总是n个左括号 n个右括号
    var re = [];
    dfs(n,n,'',re);
    return re;
};

// 有点像先序遍历
var dfs = function(left,right,str,re){

    //如果左括号数大于右括号数  就出现了 ")(" 非法的东西
    if(left>right) return;

    //左右括号数 用光了 就push到我们的结果数组中
    if(left === 0 && right === 0){
        re.push(str);
    }else{
        //走下左边
        if(left>0) dfs(left-1,right,str+'(',re);
        //走下右边
        if(right>0) dfs(left,right-1,str+')',re);
    }
};


// solution II
/**
 * 就是
 *  n = 1   ()
 *  n = 2   (()) ()()
 *  n = 3   (())() ()(()) ()()()
 *  遇到一个左括号就往右边放一个完整的()  
 *  当然会出现重复的  就用 Set数据结构来存储
 */