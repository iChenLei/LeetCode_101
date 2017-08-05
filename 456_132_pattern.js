/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    if(nums.length <= 2){
        return false;
    }
    
    var stack = [];
    var len = nums.length;

    //等同于 C++的  INT_MIN
    var third = -Infinity;
    for(var i = len-1;i>=0;i--){
        //找到了 132 pattern的【1】
        if(nums[i] < third) return true;
        else {  
                while(stack.length != 0 && nums[i] > stack[stack.length - 1]){
                    third = stack.pop();
                }
             }
        stack.push(nums[i]);
    }
    return false;
    
};