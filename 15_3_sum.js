/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var re = [];
    var set = new Set();

    //先排序
    nums.sort(function(a,b){
    //    return a > b;
    //这个能更好的排序  目前还不知道为什么
           return a-b;
    });

    //开始循环
    for(var k = 0;k<nums.length;k++){
        //因为需要三个数加上等于0  所以排序后第一个数不能是正数
        if(nums[k]>0) continue;

        // 3sum  =>  2sum
        var target = 0 - nums[k];
        var i = k+1, j = nums.length-1;

        //2sum的步骤
        while(i<j){
            if(nums[i]+nums[j] == target){
               var temparr = [nums[k],nums[i],nums[j]];
               //这里也是去重 而且 在js中的set里 数组是不同的
               // set.add([1,2,3]) set.add([1,2,3])  会存在两个  set.size == 2

               //所以想了个奇葩方法 就是 JSON.stringify
               set.add(JSON.stringify(temparr)); 

               //这里的作用是去重
               while(i<j && nums[i]==nums[i+1]) ++i;                 
               while(i<j && nums[j]==nums[j-1]) --j;

               //别忘了向中间靠近
               ++i;--j;
            }else if(nums[i]+nums[j] < target){
                ++i;
            }else{
                --j;
            } 
        }
    }
    
    //set的遍历 自己应该多去看看
    set.forEach(function(item){
        re.push(JSON.parse(item));
    });
    //console.log(set.size);
    return re;
};

//测试用例
//console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));