/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n<k || n == 0 || k == 0) return [];
    var anwser =  new Array();
    var temp = new Array();
    helper(n,k,1,temp,anwser);
    return anwser;
};

var helper = function(n,k,level,temp,anwser){
    //额 这里是深拷贝  不然后面会做操作 会影响
    if(temp.length == k) anwser.push(JSON.parse(JSON.stringify(temp)));
    for(var i = level;i<= n;++i){
        console.log(`the i is ${i}`);
        temp.push(i);
        helper(n,k,i+1,temp,anwser);
        temp.pop();
        console.log(`the temp is ${temp}`);
    }
}