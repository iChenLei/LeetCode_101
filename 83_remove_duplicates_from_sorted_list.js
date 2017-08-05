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
var deleteDuplicates = function(head) {
    if(!head) return null;
    if(!head.next) return head;
    
    var pre = head,front = head.next;
    while(front){
        if(pre.val == front.val){
            pre.next = front.next;
            front = front.next;
        }else{
            pre = pre.next;
            front = front.next;
        }
    }
    return head;
};