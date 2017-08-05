/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length == 0){
        return 0;
    }
    
    //要最大值 和 最小值
    var max = 1,min = 1;
    var re = nums[0];
    
    //复杂度 o(n) 
    for(var i = 0; i < nums.length;i++){
        //更新上一个最大值
        var oldmax = Math.max(max,1);
        
        //遇到正数
        if(nums[i] > 0){
            //最大值就是直接✖️
            max = oldmax * nums[i];
            //最小的也是 之前最小直接✖️
            min = min*nums[i];
        }else{
            //遇到0⃣️或者负数 。最大值就是之前最小值✖️0⃣️或者负数
            max = min * nums[i];
            //最小值就是  之前最大值✖️这个值
            min = oldmax * nums[i];
        }
        //返回最大值之间较大的值
        re = Math.max(re,max);
    }
    
    return re;
    
};