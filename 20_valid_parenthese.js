var isValid = function(s) {
    var stack = [];
    var top_pointer = 0;
    var s_len = s.length;
    
    if(s_len == 1){
        return false;
    }
    for(var i = 0;i<s_len;++i){ 
        if(s[i]=='('||s[i]=='{'||s[i]=='['){
            stack.push(s[i]);
        }else if(s[i]==')'||s[i]=='}'||s[i]==']'){
            stack.push(s[i]);
            var len = stack.length;
            if(len == 0 || len ==1){return false};
            if((stack[len-2]=='(' && stack[len-1]==')')||(stack[len-2]=='[' && stack[len-1]==']')||(stack[len-2]=='{' && stack[len-1]=='}')){
                stack.pop();stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length == 0; 
};

console.log(isValid("()[]{}"));

