
//这个看起来像是先序遍历
var maxDepth = function(root) {
    if(root == null){
        return  0;
    }
    
    //利用了JS自带的Math对象的max函数
    return Math.max(maxDepth(root.right),maxDepth(root.left))+1;
};



//相对来说这个更好理解
var maxDepth = function(root) {
     if(root===null) {
            return 0;
        }

        //如果有子节点  就给记录+1
        var leftDepth = maxDepth(root.left)+1;
        var rightDepth = maxDepth(root.right)+1;
        
        //哪个深度更大返回哪个
        if(leftDepth>=rightDepth) {
           return leftDepth;
        }
       else {
           return rightDepth;
       }
};