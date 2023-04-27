function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const deleteDuplicates = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  var fake = new ListNode(0);
  fake.next = head;
  var curr = fake;
  while (curr.next != null && curr.next.next != null) {
    if (curr.next.val == curr.next.next.val) {
      let duplicate = curr.next.val;
      while (curr.next != null && curr.next.val == duplicate) {
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }
  return fake.next;
};
