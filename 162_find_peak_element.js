/**
 * @param {number[]} nums
 * @return {number}
 */

// best answer yet.. 88 ms
var findPeakElement = function(nums) {

    //call (object,...args)
    //apply (object,[args])
    var max = Math.max.apply(null,nums);

    //indexOf 数组查找数字索引方法
    return nums.indexOf(max);
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    //死脑筋的方法
    for(var i = 0;i < nums.length;++i){
        if(nums[i] < nums[i-1]){
            return i-1;
        }
    }
    return nums.length-1;
};