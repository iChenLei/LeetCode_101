/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// z字形打印二叉树
var zigzagLevelOrder = function(root) {

    //  null就返回空数组
    if(root === null) return [];
    var stack = [];
    var level = 0;
    var re = [];
    //首先吧根节点 放到队列里面
    stack.push(root);

    //几个参数  节点 层数(判断如何打印的问题) 返回数组 和节点队列
    BFS(root,level,re,stack);
    return re;
};

var BFS = function(root,level,re,stack){
    while(stack.length != 0){

        //临时 某一层路径的数组
        var temp = [];

        //得到队列的长度
        var len = stack.length;

        //将下层全部push到队列中   
        for(var i = 0;i < len ;++i){
           if(stack[i].left) stack.push(stack[i].left);
           if(stack[i].right) stack.push(stack[i].right); 
        }

        //将上一层的节点 从队列中移除去 顺便记录节点的val
        for(var j = 0;j<len;++j){
            temp.push(stack.shift().val);
        }
        
        //奇数层和偶数层不同  路径相反
        if((level%2)===0){
            re.push(temp);
        }else{
            //利用reverse方法 直接将数组翻转
            re.push(temp.reverse());
        }

        //一层遍历完 层数加一
        level++;
    }
}