var reverseList = function(head) {
    if(!head || head.next==null) return head;
    var F,M,L;   //FML��Ӧ��C++���������ָ��
    L = head;
    M = head.next;  //���õݹ�Ļ�������ָ������
    L.next = null;
    while(M!=null){
        F = M.next;    //��������Ĳ���˳��
        M.next = L;    // 1.��������λ��
        L = M;         // 2.�м������ָ�뷴��
        M = F;         // 3.��ָ��ָ����ָ�� ��ָ��ָ����ָ�� 
    }
    return L;
};

//node�ڵ�Ķ���
var Node = function(val){
    this.value = val;
    this.next = null;
}

//�Լ��Ĳ������� ˳�㸴ϰJavascript������ԭ��,Function,new�������Ȼ���֪ʶ
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