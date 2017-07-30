/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {

    //如果长度都不一样 当然直接 返回false
    if(s1.length !== s2.length) return false;
    
    //都相等了  还不直接返回true？ 2333
    if(s1 === s2) return true;
    var str_one = s1.split('');
    var str_two = s2.split('');
    
    //数组排下序  如果字符都不一样  当然不可能为 true
    if(str_one.sort().join('') != str_two.sort().join('')) return false;
    

    //这里循环一波  举个例子  great  rgeat
    //  [g reat | r geat] [gr eat | rg eat] [gre at | rge at] [grea t | rgea t]

    //这里i必须从【1】开始  否则栈溢出
    for(var i = 1;i<s1.length;++i){
        var s1_l = s1.slice(0,i);
        var s1_r = s1.slice(i);
        
        var s2_l = s2.slice(0,i);
        var s2_r = s2.slice(i);
        
        //递归调用  判断子字符串是否复合条件  这里是顺序的
        if(isScramble(s1_l,s2_l) && isScramble(s1_r,s2_r)) return true;
        s2_l = s2.slice(s1.length-i);
        s2_r = s2.slice(0,s1.length-i);

        //这种就是交换后 是否左右两端相等
        if(isScramble(s1_l,s2_l) && isScramble(s1_r,s2_r)) return true;
    }
    return false;
};