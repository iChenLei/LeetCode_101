/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var re = [];
    if(digits.length === 0) return re;
    //根据题意只输入 2-9  需要建立对应的映射表
    var dict = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    //有 level 这个参数 代表我们digits的长度 当我们字符串长度等于那个时  当然就要push进我们的数组
    dfs(digits,dict,0,[],re);
    return re;
};

var dfs = function(digits,dict,level,str,re){
    if(level === digits.length){

        //这里有个操作就是 js没有c++里面方便的  vector<string>
        //所以这么操作 举个例子  ["a","c","k"]
        // [..].join("")  =>  "ack"
        re.push(str.join(""));
    }else{
        //寻找映射表

        //digits数字字符串 digist[n] = "x"
        //js里面  number(char) - number => number - number
        // 如果自己觉得不放心可以  dict[parseInt(digits[n])-2]
        var s = dict[digits[level]-2];

        //需要知道 对应电话按钮的数字 对应的字符表  有3个 有4个(9)
        for(var i = 0;i < s.length;++i){
            //压入字符数组中
            str.push(s[i]);
            dfs(digits,dict,level+1,str,re);
            //递归调用返回时  pop出去字符
            str.pop();

            //递归调用
            /**
             *  ->
             *     ->
             *         ->
             *            ->
             *               ->
             *            ->
             *         ->
             *     ->
             *  ->
             */  
            
        }
    }
};