var isValid = function(s) {
    var stack = [];           //创建一个数组，当作栈使用
    var s_len = s.length;     //获取字符串长度
    
    //如果字符串只有一个字符 直接返回false
    if(s_len == 1){
        return false;
    }
    for(var i = 0;i<s_len;++i){ 
        if(s[i]=='('||s[i]=='{'||s[i]=='['){
            stack.push(s[i]);             //左括号压入栈
        }else if(s[i]==')'||s[i]=='}'||s[i]==']'){
            stack.push(s[i]);             //右括号压入栈
            var len = stack.length;       //用数组长度代替传统的栈顶指针
            if(len === 1){return false};  //如果左边不存在括号 直接返回false

            //判断是否有配对的括号组 有将两个括号都pop出去
            if((stack[len-2]=='(' && stack[len-1]==')')||(stack[len-2]=='[' && stack[len-1]==']')||(stack[len-2]=='{' && stack[len-1]=='}')){
                stack.pop();stack.pop();
            }else{
                //括号配对失败 直接返回false
                return false;
            }
        }
    }

    //如果栈空就说明string是合法的字符串 反之就不是
    return stack.length === 0; 
};


