const sortedArrayToBST = (nums) => {
  const helper = (start, end) => {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = helper(start, mid - 1);
    root.right = helper(mid + 1, end);
    return root;
  };
  return helper(0, nums.length - 1);
};

const hasCycle = (head) => {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      return true;
    }
  }
  return false;
};
