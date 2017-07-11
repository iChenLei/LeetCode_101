/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//这个显然看起来更简单
//这次比较熟悉了Javascript的Map应用了


/**
 * Map的几个操作 set get has 查找获取的复杂度为 o(1)
 * 循环往Map里面加入数字 用target - nums[i]获去另一个数字
 * 
 * 有个疑问是复杂度为 o(n) 耗时为159ms 而上一个解法nlogn耗时 129ms
 * 是哪里出问题了呢？ set的写入操作耗时？
 */
var twoSum = function(nums, target) {
    var jsmap = new Map();
    var len = nums.length;
    
    for(var i = 0;i<len;++i){
        var N = target - nums[i];
        if(jsmap.has(N)){
            return [jsmap.get(N),i];
        }
        jsmap.set(nums[i],i);
    }
};