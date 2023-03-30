const removeNthFromEnd = function (head, n) {
  const lengthOfLinkedList = (head) => {
    let count = 1;
    let node = head;
    while (node && node.next) {
      node = node.next;
      count++;
    }
    return count;
  };

  if (!head.next && n > 0) {
    return head.next;
  }
  const length = lengthOfLinkedList(head);
  const nFromStart = length - n + 1;
  let count = 1;
  let prev = null;
  let cur = head;

  if (nFromStart === 1) {
    return head.next;
  }
  while (count !== nFromStart && cur.next) {
    prev = cur;
    cur = cur.next;
    count++;
  }
  prev.next = cur.next;
  return head;
};
