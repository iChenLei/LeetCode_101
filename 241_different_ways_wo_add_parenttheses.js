/**
 * @param {string} input
 * @return {number[]}
 */
var hashmap = new Map();


/** 这个问题就是将问题分割成小问题 小问题聚合成大问题
* 
*  for( {string} input  ( '-','-')  )
*                         /     \
                         /       \  
                        /         \
*                 2-1-2          2-1-2
*                 /\                /\
*                2  1-2           2-1 2 
*                   /\            /\
*                  1  2          2  1 
*/                
var diffWaysToCompute = function(input) {
    //hashmap做cache的作用
    if(hashmap.has(input)) return hashmap.get(input);
    var res = [];
    for(var i = 0;i<input.length;++i){
        // console.log(`what the fuck input is ${input}`);

        //找到 操作符 就开始遍历
        var operator = input.charAt(i); 
        if(operator == '+' || operator == '-' || operator == '*'){

            //后序遍历的代表
            var left = diffWaysToCompute(input.slice(0,i));
            var right = diffWaysToCompute(input.slice(i+1));

            //写代码最好不要用 i j k  出错了都不知道那里错了 23333
            console.log(right,left);
            for(var j = 0;j < left.length;j++){
                for(var k = 0;k < right.length;k++){
                    if(operator == '+'){
                        res.push(left[j]+right[k]);
                    }else if(operator == '-'){
                        res.push(left[j]-right[k]);
                    }else{
                        res.push(left[j]*right[k]);
                    }
                }
            }
            // switch(operator){
            //     case '+':res.push(left[0]+right[0]);break;
            //     case '*':res.push(left[0]*right[0]);break;
            //     case '-':res.push(left[0]-right[0]);break;                
            // }
        }
    }
    //没有操作的字符串 那就是 这种情况  number <-> operator <-> string
    //直接压入数组
    if(res.length == 0) res.push(parseInt(input));
    hashmap.set(input,res);
    return res;
};

console.log(diffWaysToCompute("2*3-4*5"));