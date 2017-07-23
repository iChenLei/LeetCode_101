/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 利用标准函数  排行99%
var search = function(nums,target){
    return nums.indexOf(target);
}

//标准答案   排行44%  呵呵(￣▽￣)" 
//      算法复杂度  log2(n) 
//      L    mid      R
//      0 1 2 [3 4 5 6]
//      6 0 1 [2 3 4 5]
//      5 6 0 [1 2 3 4]
//      4 5 6 [0 1 2 3]
//      [3 4 5] 6 0 1 2
//      [2 3 4] 5 6 0 1
//      [1 2 3] 4 5 6 0  

//     1.先比较是否 mid < R 是则右边是有序的 
//     2.判断是否是 nums[mid] < target < nums[R]
//     3.是的话二分右边的数组 不是就二分左边的数组
var search = function(nums, target) {

    //两种边界  1.[]   2.[number]
    if(nums.length == 0) return -1;
    if(nums.length == 1 && nums[0] == target){
        return 0;
    } 
    var left = 0, right = nums.length-1;
    
    while(left < right){

        // ceil 向上取整
        var mid_index = Math.ceil((left+right)/2);

        //两种特殊边界  最左最右
        if(nums[left] == target){
            return left;
        }
        if(nums[right] == target){
            return right;
        }

        //判断中间值
        if(nums[mid_index] == target){
            return mid_index;
            
            //判断是否属于排序的一边
        }else if(nums[mid_index]<nums[right]){
            if(target > nums[mid_index] && target < nums[right]){
                left = mid_index + 1;
            }else{
                right = mid_index - 1;
            }
        }else{
            //判断是否属于区间
            if(target > nums[left] && target < nums[mid_index]){
                right = mid_index - 1;
            }else{
                left = mid_index + 1;
            }
        };
    }

    //这是没找到的情况
    return -1;
};