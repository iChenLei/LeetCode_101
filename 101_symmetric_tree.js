/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    return isSy(root.left,root.right);
};

var isSy = function(left,right){
    if(!left && !right) return true;
    if((!left && right) || (!right && left) || (right.val != left.val)) return false;
    
    return isSy(left.right,right.left) && isSy(left.left,right.right);
}