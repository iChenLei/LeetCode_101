/**
 * @param {string} s
 * @return {number}
 */

//特殊化的斐波那契数列

// a-z => 1-26
var numDecodings = function(s) {
    if(s.length == 0 || s[0] == 0) return 0;
    var len = s.length;
    var dp = [];

    //初始化dp数组 比s长度多1
    for(var i = 0;i < len+1;i++){
        dp.push(0);
    }
    //初始化第一个位置为1  斐波那契前两项也为1
    dp[0] = 1;
    
    for(i = 1;i<dp.length;i++){
        dp[i] = (s[i-1] == '0')?0:dp[i-1];
         if (i > 1 && (s[i - 2] == '1' || (s[i - 2] == '2' && s[i - 1] <= '6'))) {
                dp[i] += dp[i - 2];
        }
    }
    
    return dp.pop();
}

/**
 *  举例模拟一下 "12"
 *  dp = [1,0,0]
 * 
 *  开始循环
 *  loop do
 *      dp[1] = ( '1' == '0') ? 0 : dp[0] = dp[0] = 1
 *      dp[2] = ( '2' == '0') ? 0 : dp[1] = dp[1] = 1
 *      if( 2 > 1 && ( dp[0] == '1' || ( s[0] == '2' && s[1] <= '6' ))){
 *                  dp[2] = dp[2] + dp[0] = 2
 *          }
 *  end
 */