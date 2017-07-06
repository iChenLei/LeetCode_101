/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var front, back;
    /**  这烂代码 哎
    if (head == null) {
        return false;
    }
    front = head.next;
    if (front == null) {
        return false;
    }
    */
    // 用js写代码 要常注意 can't read property of null 错误
    if(head == null || head.next == null){
        return false;
    }
    //两个节点(指针)从头开始走 
    //一个走一步 一个走两步 不会出现跑得快的不遇到跑得慢的
    //因为如果有环存在 意味着每次前进 跑得快的靠近慢的一步
    front = head;
    back = head;
    //感觉自己有时候简单的边界判断都做不好 做不好就用笨的方式做判断
    while (!(front.next == null || front.next.next == null)) {
        back = back.next;
        front = front.next.next;
        if (back == front) {
            return true;
        }
    }
    return false;
};