/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    var val_arr = [];
    var node_arr = [];
    if(root == null || (root.right == null && root.left == null)){
        return;
    }

    //先中序遍历
    invorder(root,val_arr,node_arr);
    //得到一个递增序列  然后快排
    val_arr.sort((a,b)=>{
        return a>b;
    });

    //赋值
    for(var i = 0;i<node_arr.length;++i){
        node_arr[i].val = val_arr[i];
    }
};

//中序遍历
var invorder = function(root,val_arr,node_arr){
    if(root.left){ invorder(root.left,val_arr,node_arr);}
    val_arr.push(root.val);
    node_arr.push(root);
    if(root.right){ invorder(root.right,val_arr,node_arr);}
}