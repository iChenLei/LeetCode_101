//打印所有的字符串排列
//这里没有考虑重复排列的情况
//如果有重复 用new Set()去重就可以了

function showAll(str){
  //将字符串弄成数组 方便操作
  //貌似不用数组 也是可以的
  var arr = str.split('');
  var len = str.length-1;
  var start = 0;
  recursion(arr,start,len);
}

function recursion(arr,start,len){
  if(start === len){
    //打印出来
    console.log(arr.join(''));
  }else{
  for(var i = start;i<=len;i++){
    var temp = arr[i];
    arr[i] = arr[start];
    arr[start] = temp;
    //这里需要拷贝数组 因为object array是引用传递
    recursion(JSON.parse(JSON.stringify(arr)),start+1,len);
  }
  }
}

//测试用例
showAll('abc');