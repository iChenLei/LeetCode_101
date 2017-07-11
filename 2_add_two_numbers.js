// function ListNode(val) {
//       this.val = val;
//       this.next = null;
// }

//本地测试数据
// var l1 = new ListNode(0);
// var l2 = new ListNode(7);
// var l3 = new ListNode(3);

// l2.next = l3;

var addTwoNumbers = function(l1, l2) {
    var flag = 0;
    var append_tag_one,append_tag_two;
    var one_p,two_p;
    
    one_p = l1;two_p = l2;
    while(!(one_p == null && two_p == null)){        
       if(one_p == null){
           //我想的是当一个链表长度小于另一个时  给短的链表补齐
            var one_append = new ListNode(0);
            append_tag_one.next = one_append;
            //这里有一个 runtime error 主要是每次循环处理开始时 指针指向问题
            one_p = one_append;
        }else if(two_p == null){
            var two_append = new ListNode(0);
            append_tag_two.next = two_append;
            two_p = two_append;
        } 

        //返回的是l1节点 所以对l1.val做操作
        //flag是前驱节点是否进位的标记
       one_p.val = one_p.val + two_p.val + flag;
       if(one_p.val >= 10){
           one_p.val = one_p.val % 10;
           flag = 1;
       }else{
           flag = 0;
       }

       //tag哨兵保存状态
       append_tag_one = one_p; 
       append_tag_two = two_p; 
       one_p = one_p.next;
       two_p = two_p.next;
    }
    if(flag == 1){
        //这里主要是 可能存在多出一个节点的情况
        var append = new ListNode(1);
        append_tag_one.next = append;
    }
    //返回一个链表
    return l1;
};