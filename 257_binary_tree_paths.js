/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root == null) return [];
    var re = [];
    var root_val = root.val;
    var root_str = root_val.toString();
    dfs(root,root_str,re);
    return re;
};


//深度优先 扫子节点  放到数组里面
var dfs = function(root,root_str,re){

    //这里需要临时变量  不然 左右子节点会互相影响
    var temp_str = root_str;
    if( !root.left && !root.right){
        re.push(root_str);
        return;
    }
    if(root.left){
        root_str = temp_str+'->'+root.left.val.toString();
        dfs(root.left,root_str,re);
    }
    if(root.right){
        root_str = temp_str+'->'+root.right.val.toString();
        dfs(root.right,root_str,re);
    }
}