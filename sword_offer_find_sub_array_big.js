//寻找最大子串之和

function find(arr){
  // 一个当前值
  var cur = 0;
  var curB = -Infinity;
  
  for(var i = 0;i<arr.length;i++){
   //如果值比0小  那就抛弃前面的子串
    if(cur <= 0){
      cur = arr[i];
    }else{
    //反之 继续加    
      cur += arr[i];
    }
    //用一个值 记录最大值
    if(cur > curB){
      curB = cur;
    }
  }
  
  return curB;
}

//测试用例
console.log(find([1,-2,3,10,-4,7,2,-5]));