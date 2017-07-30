var maxCoins = function(nums) {
    var len = nums.length;
    nums.unshift(1);
    nums.push(1);
  
    var dp = [];
    var dp_item = [];
    for(var i = 0;i<nums.length;i++){
      dp_item.push(0);
    }
  
    for(var j = 0;j<nums.length;j++){
      dp.push(dp_item);
    }
    
    //肯定是从头扫到尾
    for(var main = 1;main <= len;++main){
    //   console.log(dp);

    //left为从1到 len-main+1
      for(var left = 1;left <= len-main+1;++left){
        var right = left+main-1;

        //从i扫到j
        for(var k = left;k<=right;++k){
          
          //这个递推式很重要  虽然我没看懂
          dp[left][right] = Math.max(dp[left][right],nums[left-1]*nums[k]
                                     *nums[right+1]+dp[left][k-1]
                                     +dp[k+1][right]);
        }
      }
    }
    return dp[1][len];
};

console.log(maxCoins([3,1,5,8]));