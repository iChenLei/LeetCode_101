/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    //直接排序 JS的底层实现是快排 性能还行
    nums.sort(function(a,b){return a -b});
    //从小到大排序 所以索引反着来
    return nums[nums.length-k]
};