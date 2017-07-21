/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums){
    //其实可以不用set哈
  var sset = new Set();
  var sset_re = [];
  var temp = [];
  sset.add([]);
  for(i = 0;i<nums.length;++i){
    temp = [];
    var pre_s_length = sset.size;
    sset.forEach(function(item){
        //这一步很坑 牢记  number string值传递  array object 引用传递
        //下面是比较简单的  深拷贝
      var temp_item = JSON.parse(JSON.stringify(item));
      temp.push(temp_item);
      item.push(nums[i]);
    });
    var t_length = temp.length;
    for(s = 0;s<t_length;++s){
      sset.add(temp[s]);
    }
  }
  sset.forEach((item)=>{
    sset_re.push(item);
  })
  return sset_re;
};

/**
 *   解题思路
 *   []
 *   [1]
 *   [1,2] [2]
 *   [1,2,3] [2,3] [1,3] [3]
 */