// with Set

const containsDuplicate = (nums) => {
  const s = new Set(nums);
  return s.size !== nums?.length;
};

// rotateList
const rotateRight = (head, k) => {
  if (!head || !head?.next) {
    return head;
  }
  let tail = head;
  let length = 1;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  tail.next = head;
  k = length - (k % length);
  for (let i = 0; i < k; i++) {
    tail = tail.next;
    head = head.next;
  }
  tail.next = null;
  return head;
};
