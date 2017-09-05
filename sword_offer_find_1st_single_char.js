//寻找第一个只出现一次的字符
function find(str){
  var s = 'null';
  var array = str.split('');
  var dict = new Map();
  for(var i = 0;i < array.length;i++){
    if(!dict.has(array[i])){
      dict.set(array[i],1);
    }else{
      var count = dict.get(array[i])+1;
      dict.set(array[i],count);
    }
  }
//  这里有个重要的知识点 for/of循环可以跳出循环
//  forEach / for-in 不能跳出循环 必须全部循环
//   dict.forEach(function(v,k){
//     if(v == 1){
//       return k;
//     }});
//   return s;
  for(var item of dict){
//  for-of循环 item[0] == key item[1] == value
//     console.log(`${item[0]} and ${item[1]}`);
//  找到第一次只出现一次的字符 立即跳出循环
    if(item[1] == 1){
      return item[0]; 
    }
  }
  return s;
}

//测试用例
console.log(find('abbbbsbabbrjkjk'));