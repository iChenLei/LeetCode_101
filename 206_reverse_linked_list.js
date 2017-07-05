var reverseList = function(head) {
    if(!head || head.next==null) return head;
    var F,M,L;   //FML对应在C++里面就是三指针
    L = head;
    M = head.next;  //不用递归的话就是三指针问题
    L.next = null;
    while(M!=null){
        F = M.next;    //反向链表的操作顺序
        M.next = L;    // 1.代理三个位置
        L = M;         // 2.中间代理人指针反向
        M = F;         // 3.左指针指向中指针 中指针指向右指针 
    }
    return L;
};

//node节点的定义
var Node = function(val){
    this.value = val;
    this.next = null;
}

//自己的测试用例 顺便复习Javascript的里面原型,Function,new操作符等基本知识
var a = new Node(2);
var b = new Node(3);
var c = new Node(4);
var d = new Node(5);

a.next = b;
b.next = c;
c.next = d;

// reverseList(a);
var myNode = reverseList(a);

console.log(myNode);