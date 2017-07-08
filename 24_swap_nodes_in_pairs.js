/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/** 自己喜欢用迭代的方式解决问题 而不是递归
 *  自己应该多用递归想想解决办法
 */


var swapPairs = function(head) {
    var front,end,flag,H,temp,tail;

    //一般自己喜欢将特殊情况拎出来
    if(head == null || head.next == null){
        return head;
    }
    
    front = head.next;
    end = head;
    end.next = front.next;
    front.next = end;
    H = front;
    flag = end;
    
    if(flag == null){
        return H;
    }
    
    //感觉做的比较麻烦了 就是两个指针 一个哨兵 一个交换变量
    while(!(flag.next == null || flag.next.next == null)){
        temp = front;front = end;end = temp;
        tail = front;
        end = end.next.next;
        front = front.next.next;
        end.next = front.next;
        front.next = end;
        tail.next = front;
        flag = end;
    }
    
    return H;
};