class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if(!head || !head->next) return head; //如果空指针或者只有一个节点就直接返回
        ListNode *p = head;
        head = reverseList(p->next);  //递归到最后一个节点 
        p->next->next = p;
        p->next = NULL;
        return head;
    }
};