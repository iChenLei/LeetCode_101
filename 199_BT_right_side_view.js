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
var rightSideView = function(root) {
    var queue = [];
    var re = [];
    if(root == null){
        return re;
    }
    //队列压入根节点
    queue.push(root);

    //队列为空停止
    while(queue.length != 0){

        //读出队列的长度
        var length = queue.length;

        //返回值数组 压入队列最右边的值
        re.push(queue[length-1].val);

        //下一层统计时  循环
        for(var i = 0;i<length;i++){

            //上一层节点一次去掉
            node = queue.shift();

            //保存下一层节点到队列
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return re;
};