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
var isValidBST = function(root) {
    var nodeList = [];
    //如果根节点为空 返回true
    if(root == null){
        return true;
    }
    inorder(root,nodeList);
    var len = nodeList.length;
    //如果只有一个节点 返回true
    if(len == 1){
        return true;
    }

    //如果是一个有效二叉搜索树 则中序遍历后的数组 是个递增数组
    for(var i = 0;i<len;++i){

        //判断是不是一个递增数组就行啦
        if(nodeList[i] >= nodeList[i+1]){
            return false;
        }
    }
    //没有返回false就是true咯
    return true;
};


//中序遍历结果存在数组里面
function inorder(root,nodeList){
    if(root.left) inorder(root.left,nodeList);
    nodeList.push(root.val);
    if(root.right) inorder(root.right,nodeList);
}