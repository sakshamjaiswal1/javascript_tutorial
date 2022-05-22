const mergeTwoList =(list1,list2)=>{
   // If list1 = [], return list2; if list2 = [], return list1
   if (!list1 || !list2) {
    return list1 ? list1 : list2;
}

// Get the fisrt node of the merged list
let currentNode = list1.val <= list2.val ? list1 : list2;

// result holds the fisrt node (head) to be used to return later
const result = currentNode;

// Navigate to the next node of the list, which has the same first node as the merged list
list1 = currentNode === list1 ? list1.next : list1;
list2 = currentNode === list2 ? list2.next : list2;

// If both list still have nodes
while (list1 || list2) {
    // If one of the list is null, the rest nodes in the merged list will be the other list
    if (!list1 || !list2) {
        currentNode.next = list1 ? list1 : list2;
        break;
    }
    
    // Get the next node for the merged list
    if (list1.val <= list2.val) {
        currentNode.next = list1;
        list1 = list1.next;
    } else {
        currentNode.next = list2;
        list2 = list2.next;
    }
    
    currentNode = currentNode.next;
    
}
return result;


}

 console.log( mergeTwoList([1,2,31,1,2],[5,6,1]))