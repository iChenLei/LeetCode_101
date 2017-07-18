/**
 * @param {number[]} height
 * @return {number}
 */


//一个双指针问题 two pointer
var trap = function(height) {
    var water = 0;
    var left = 0;
    var right = height.length-1;
    
    while(left < right){

        //找到左右指针值相对小的那个
        var flag = Math.min(height[left],height[right]);
        if(flag == height[left]){
            //移动指针
            ++left;
            //遇到坑就把水量计算出来并存储
            while(left < right && height[left] < flag){
                water += flag - height[left++];
            }
        }

        //右指针出了往左走 处理行为是一致的
        if(flag == height[right]){
            --right;
            while(left < right && height[right] < flag){
                water += flag - height[right--];
            }
        }
    }
    return water;
};