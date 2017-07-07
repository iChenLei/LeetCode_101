/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    //建立一个栈
    var stack = [];
    var s_len = tokens.length;
    var result = 0;
    for(var i = 0;i<s_len;++i){
        //依旧使用长度来代替栈顶指针
        var len = stack.length;
        switch(tokens[i]){
        /**
         * 一般来说当自己重复敲一些代码时  应该封装一下
         */    
            case '/':
                result=stack[len-2]/stack[len-1];
                //听leon的话 pasreInt一下 除数
                stack[len-2] = parseInt(result);
                stack.pop();break;
            case '*':
                result=stack[len-2]*stack[len-1];
                stack[len-2] = result;
                stack.pop();break;
            case '-':
                result=stack[len-2]-stack[len-1];
                stack[len-2] = result;
                stack.pop();break;
            case '+':
                result=stack[len-2]+stack[len-1];
                stack[len-2] = result;
                stack.pop();break;
            default:stack.push(parseFloat(tokens[i]));break;
        }
    }
    //返回栈顶的值 就是答案
    return stack.pop();
};