var mergeTwoLists =  function(l1,l2){
    //最开始一直纠结需要用 l1.next和l2比较
    //可以用一个临时变量做替代 这样边界检查就轻松很多

    //JavaScript里面的 new操作产生一个对象
    var head = new ListNode(-1);
    var temp = head;

    /* Javascipr里面object的赋值是传地址
     * 我们操作拷贝对象 会影响原对象的参数
     */
    while(l1!==null && l2 !== null){
        if(l1.val > l2.val){
            temp.next = l2;
            l2 = l2.next;
        }else{
            temp.next = l1;
            l1 = l1.next;
        }
        temp = temp.next;
    }

    if(l1 !== null){
        temp.next = l1;
    }

    if(l2 !== null){
        temp.next = l2;
    }

    //一开始 head.next就指向了 值较小的一个链表头部
    return head.next;
}