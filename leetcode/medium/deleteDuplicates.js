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

const partition = function (head, x) {
  let fdum = new ListNode(0),
    bdum = new ListNode(0),
    front = fdum,
    back = bdum,
    curr = head;
  while (curr) {
    if (curr.val < x) (front.next = curr), (front = curr);
    else (back.next = curr), (back = curr);
    curr = curr.next;
  }
  (front.next = bdum.next), (back.next = null);
  return fdum.next;
};

const reverseBetween = (head, left, right) => {
  const dummy = new ListNode(0, list);
  let head = dummy;
  let curr = 1;
  while (left++ < right) {
    const next = tail.next;
    tail.next = next.next;
    next.next = head.next;
    head.next = next;
  }
  return dummy.next;
};

const reverseBetween2 = (list, left, right) => {
  const dummy = new ListNode(0, list);
  let head = dummy;
  let curr = 1;

  while (curr++ < left) head = head.next;
  let tail = head.next;
  while (left++ < right) {
    const next = tail.next;
    tail.next = next.next;
    next.next = head.next;
    head.next = next;
  }
  return dummy.next;
};
