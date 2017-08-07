var numDistinct = function(s, t) {
    var s_len = s.length;
    var t_len = t.length;
    
    if(s.length < t.length){
        return 0;
    }
    
    var matrix_item = [];
    var matrix = [];
    for(var i = 0;i<s_len+1;i++){
        matrix_item.push(0);
    }
    for(var j = 0;j<t_len+1;j++){
        matrix.push(matrix_item);
    }
    
    for(var s = 0;s<=s_len;s++){
        matrix[0][s] = 1;
    }
    
    for(var k = 1;k<=t_len;k++){
        matrix[k][0] = 0;
    }
    
    for(i = 1;i<=t_len;i++){
        for(j = 1;j<=s_len;j++){
            console.log(matrix);
            matrix[i][j] = matrix[i][j-1] + (s[i-1]==t[i-1] ? dp[i-1][j-1] : 0);
            
        }
    }
    
    return matrix[t_len][s_len];
};