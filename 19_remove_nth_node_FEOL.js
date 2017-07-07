/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var front,last;
    front = head;
    last = head;

    //双指针问题 一个先行  后面跟上
    for(var i = 0;i<n;++i){
        front = front.next;
    }

    //这是处理那种去掉头节点的特殊情况
    //不这么弄 下面的循环会抛 can't read property of null的错误
    if(front == null){
        return last.next;   
    }

    //让front指针跑到链表尾部
    while(front.next != null){
        last = last.next;
        front = front.next;
    }

    //删除节点 这里的last是删除节点的直接前驱
    last.next = last.next.next;
    return head;
};