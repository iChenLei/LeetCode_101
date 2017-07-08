/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var stack = [];
    var len = path.length;
    
    for(var i = 0;i<len;++i){
        stack.push(path[i]);
        var s_len = stack.length;
        if(stack[s_len-1] == '/'){
            if(s_len == 1){
                continue;
            }
            if(s_len >= 4 && stack[s_len-2] == '.' && stack[s_len-3] == '.'&& stack[s_len-4] != '/'){
                 continue;   
            }
            if(stack[s_len-2] == '/'){
                stack.pop();continue;
            }
            if(stack[s_len-2] == '.' && stack[s_len-3] == '/'){
                stack.pop();stack.pop();continue;
            }
            if(stack[s_len-2] == '.' && stack[s_len-3] == '.'){
                if(s_len == 4){
                    stack.pop();stack.pop();stack.pop();continue;
                }else{
                    stack.pop();stack.pop();stack.pop();stack.pop();
                    while(stack.pop() != '/'){
                        //do nothing;
                    }
                    stack.push('/');
                }
            }
        }
        
    }
    var ss_len = stack.length;
    if(stack[ss_len-1] == '/'&& ss_len != 1 ){
        stack.pop();
    }

        console.log(stack);
    var sss_len = stack.length;
    if(sss_len >= 4 && (stack[sss_len-1] == '.' && stack[sss_len-2] == '.' && stack[sss_len-3] != '/')){
        // do nothing
    }else if(sss_len >= 4 && (stack[sss_len-1] == '.' && stack[sss_len-2] == '.' && stack[sss_len-3] == '/')){
        stack.pop();stack.pop();stack.pop();stack.pop();
         while(stack.pop() != '/'){
            //do nothing;
        }
        stack.push('/');
    }else if(stack[sss_len-1] == '.' && stack[sss_len-2] == '.'){
        stack.pop();stack.pop();
    }else if(stack[sss_len-1] == '.'){
        stack.pop();    
    }

    var L_len = stack.length;
    if(stack[L_len-1] == '/'&& L_len != 1 ){
        stack.pop();
    }
    return stack.toString().replace(/,/g,'');
        
};

console.log(simplifyPath("///eHx/.."));