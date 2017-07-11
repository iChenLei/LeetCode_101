/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 看了下官方给的解答
 * 用暴力搜索是可以的，o(n^2)的复杂度可以做到
 * 也可以利用【hashmap】 <k,v> 来做  复杂度o(n)
 * 至于Javascript里面 应该对应的是Map  Set里面不能出现两个重复的key
 * 我算了下自己的算法复杂度 nlogn 这个样子 主要需要做一个快排
 */


var twoSum = function(nums, target) {
    // 这里复习一下 Jvascript的数组拷贝
    // 可以循环 push 也可以 concat() 或者 slice()
    var rawNums = []; 
    rawNums = nums.slice();

    //这里有一个坑 排序直接sort会按照item的第一字符的ascii码排序
    //数组 顺序排序 推荐 在sort里面加条件函数
    var sortedNums = nums.sort(function(a,b){return a-b;});
    var p1 = 0,p2 = nums.length - 1;

    //这里属于【搜索】的范畴 将指针放在数组两端
    // 逐渐靠拢答案  大于右指针左移 小于左指针右移
    while((sortedNums[p1] + sortedNums[p2])!=target){
         if((sortedNums[p1] + sortedNums[p2]) > target){
             p2 -= 1;
         }else{
             p1 += 1;
         }
    }

    //这里获取原来数组中数字所在的位置
    var s1 = rawNums.indexOf(sortedNums[p1]);
    //这里是防止 出现 3 + 3 = 6这种情况是 不能正确获取p2数字在原数组的位置
    rawNums[s1] = -1;
    var s2 = rawNums.indexOf(sortedNums[p2]);

    //判断 s1 s2大小 返回 [small,large]的数组
    if(s1<s2){
        return [s1,s2];
    }else{
        return [s2,s1];
    }
};