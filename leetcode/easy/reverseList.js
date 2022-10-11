const reverseList=(head)=>{
    let pre = null
    let curr = head
    while(curr){
        const next = curr.next
        curr.next = pre
        pre= curr
        curr = next
    }
    return pre
}