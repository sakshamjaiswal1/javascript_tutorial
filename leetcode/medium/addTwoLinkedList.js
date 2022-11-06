

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 




const addTwoLinkedList = (l1,l2)=>{
 var l1p=l1
 var l2p=l2
 var prev = new ListNode(null)
 var prevp= prev
 var carry = false
 while(l1p || l2p){
var curr = l1p!==null ?l1p:l2p
var val1 =l1p!==null ?l1p:0
var val2 = l2p!==null?l2p:0
var val3 = carry?1:0
if(sum>9){
sum= sum-10
carry= true
}
else{
    carry = false
}
curr.val = sum
prevp.next = curr
prevp = prev.next
if(l1p) l1p = l1p.next
if(l2p) l2p =  l2p.next

 }
 if(carry){
    prevp.next= new ListNode(1)
 }
 return  prev.next
}