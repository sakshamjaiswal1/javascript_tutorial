var mergeTwoLists = function(list1, list2) {
    let list = [...list1,...list2]
    let sortList = list.sort((a,b)=>a-b)
    return sortList
};

// console.log(mergeTwoLists([1,2,4],[1,3,4]))
// understanding Linked List
class ListNode {
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkedList {
    constructor(head=null){
        this.head=head
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)

node1.next= node2

let list = new LinkedList(node1)

