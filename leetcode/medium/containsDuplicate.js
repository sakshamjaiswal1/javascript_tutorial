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

// unique path with obstacles

const isValidBSTHelper = (node, min, max) => {
  if (node === null) {
    return true;
  }
  if (node.val <= min || node.val >= max) {
    return false;
  }
  return (
    isValidBSTHelper(node?.left, min, node?.val) &&
    isValidBSTHelper(node?.right, node?.val, max)
  );
};

const isValidBST = (root) => {
  return isValidBSTHelper(root, -Infinity, Infinity);
};
