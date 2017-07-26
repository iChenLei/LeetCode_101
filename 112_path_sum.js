/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

//这题我和 打印 sum得path记混了  那个是用 数组记录路径 不符合条件需要pop节点 并减去对应的val
var hasPathSum = function(root, sum) {

//如果根节点是 null
    if(root === null){
        return false;
    }
    
    //因为是叶子节点 所以判定得时候 需要 节点没有子节点
    if(root.left === null && root.right === null && sum === root.val) return true;
    
    //因为返回得是 boolean 值 所以可以左右子树一起遍历 用 ||  连接 有节点复合就停止递归

    //它这个 sum - root.val  很好理解  反过来不就是从根节点加上去 加到root节点嘛
    return hasPathSum(root.left,sum-root.val)||hasPathSum(root.right,sum-root.val);
    
};