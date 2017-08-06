var rotateRight = function(head, k) {

    //边界检查
    if(!head || !head.next){
        return head;
    }
    if(k == 0){
        return head;
    }
    var _k = 1;
    var tail_node = head;
    var count_node = head;
    var list = [];

    //这里有个坑 我以为 K大于链表长度 就直接返回原链表
    //其实是要  求 k%len 的余数
    while(count_node){
        list.push(count_node);
        count_node = count_node.next;
    }
    
    var k = k % list.length;
    //如果 k == 0 那么直接返回 
    if( k == 0){
        return head;
    }

    /**
     *   这里和 除掉倒数第 K 个点差不多
     *   / 1 .... k .... n /
     *  直接找到第n个点 
     *  然后头节点和k节点 一起向后走  直到尾节点
     *  / 1 ..... 1 .... k /
     */   
    while(tail_node){
        if(_k == k){
            break;
        }
         tail_node = tail_node.next;
         _k++;
    }
    //这个是说 k == 链表长度 直接返回原链表
    if(_k == k && tail_node && !tail_node.next){
        return head;
    }
    
    var last = head,flag = head,fast;
    
    while(tail_node.next){
        flag = flag.next;
        tail_node = tail_node.next;
    }
    
    tail_node.next = last;
    while(tail_node.next != flag){
         tail_node = tail_node.next; 
    }
    tail_node.next = null;
    return flag;
};