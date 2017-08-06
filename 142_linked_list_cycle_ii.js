var detectCycle = function(head) {

    //边界预判定
    if(!head || !head.next || !head.next.next){
        return null;
    }
    
    var a = head,b = head;
    
    //判断是否有环
    while(!(a.next == null || a.next.next == null)){
          a = a.next.next;
          b = b.next;
          if(a == b){
              break;
          }   
    }

    //重点是这里  之前是直接 return a 然后就 wrong error了
    if(!a || !a.next || !a.next.next ) return null;

    //让慢指针  指向头节点
    b = head;

    //快指针和慢指针  都向前走一步
    while( b!=a ){
        a = a.next;
        b = b.next;
    }
    return a;
};