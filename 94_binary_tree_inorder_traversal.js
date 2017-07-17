/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var nodeList = [];
    if(root == null){
        return [];
    }
    inorder(root,nodeList);
    return nodeList;
};

//典型的中序遍历  打印（push）步骤在左右子树遍历步骤之间
function inorder(root,nodeList){
    if(root.left) inorder(root.left,nodeList);
    nodeList.push(root.val);
    if(root.right) inorder(root.right,nodeList);
}

//  后序遍历
// function inorder(root,nodeList){
//     if(root.left) inorder(root.left,nodeList);
//     if(root.right) inorder(root.right,nodeList);
//     nodeList.push(root.val);
// }

//  先序遍历
// function inorder(root,nodeList){
//     nodeList.push(root.val);
//     if(root.left) inorder(root.left,nodeList);
//     if(root.right) inorder(root.right,nodeList);
// }