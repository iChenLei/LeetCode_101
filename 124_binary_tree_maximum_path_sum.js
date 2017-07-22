/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//有个重要的错误是 res = root.val
//这是值传递 所以res第一赋值后就不改变(其它作用域里面)
//所以用 array or object 来传递这个值

var maxPathSum = function(root) {
    var res = [root.val];
    maxPathDFS(root,res);
    return res[0];
};

function maxPathDFS(root,res){
    //空节点返回零
    if(!root) return 0;

    //找到局部的两个左右节点的值
    var left = maxPathDFS(root.left,res);
    var right = maxPathDFS(root.right,res);

    //局部最优就是 根节点 + 为正值的左右节点的值
    var top = root.val+(left > 0 ? left :0)+(right > 0 ? right :0);

    //和原来的节点 比较 更新全局值
    res[0] = Math.max(top,res[0]);

    //返回 left->root right->root root中较大的值    
    return Math.max(left,right) > 0 ? Math.max(left,right)+root.val : root.val ; 
}
