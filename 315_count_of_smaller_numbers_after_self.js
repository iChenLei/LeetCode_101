/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    var len = nums.length;
    if(len === 0) return [];
    if(len === 1) return [0];
    var re = [];

    //给返回的数组全部置零
    for(var i = 0;i < len;++i){
        re.push(0);
    }

    //一个临时的数组
    var temp = [];

    //把最右边的放进去
    temp.push(nums[len-1]);

    //从右边开始统计
    for(var i = len - 2;i >= 0; --i){
        var t_len = temp.length;
        for(var j = 0;j < t_len; ++j){
            if(nums[i] > temp[j]){
                //按 大 -> 小 的顺序  将比较的数字放进去 
                //记住splice的用法
                temp.splice(j,0,nums[i]);

                //这个直接用位置坐标来计算 count 数字
                re[i] = t_len - j;
                break;
            }else if(nums[i] < temp[t_len-1]){
              //如果小于最后一个 直接push到末尾
              //一个比较笨的 防止数组越界的方法
              temp.push(nums[i]);
              break;
            }
        }
    }
    return re;
};
