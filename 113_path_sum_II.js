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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(root == null) return [];
    var count = root.val;
    var str = count.toString();
    var re = [];
    dfs(root,count,str,re,sum);
    return re;
};

var dfs = function(root,count,str,re,sum){
    //这里没有临时量 左节点和右节点  会互相影响
    var temp_count = count;
    var temp_str = str;
    if(!root.left && !root.right){
        if(count == sum){
            //之前是字符 "-"  这样负数  全部不通过 杯具！
            var array = str.split("#");
            var len = array.length;
            for(var i = 0;i<len;++i){
                array[i] = parseInt(array[i]);
            }
            re.push(array);
        }
        return;
    }
    
    if(root.left){
        temp_count = temp_count + root.left.val;
        temp_str = temp_str+"#"+root.left.val.toString();
        dfs(root.left,temp_count,temp_str,re,sum);
    }
    
    if(root.right){
        count = count + root.right.val;
        str = str+"#"+root.right.val.toString();
        dfs(root.right,count,str,re,sum);
    }
}