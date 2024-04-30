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

const levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const queue = [root];
  while (queue?.length > 0) {
    const levelValues = [];
    const levelSize = queue?.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue?.shift();
      levelValues?.push(node.val);
      if (node?.left) {
        queue?.push(node?.left);
      }
      if (node?.right) {
        queue?.push(node.right);
      }
    }
    result.push(levelValues);
  }
  return result;
};

const zigzagLevelOrder = (root) => {
  if (!root) {
    return [];
  }
  const queue = [{ node: root, depth: 0 }];
  const result = [];
  while (queue?.length) {
    const { node, depth } = queue.shift();
    if (result?.[depth]) {
      depth % 2 === 0
        ? result[depth].push(node.val)
        : result[depth].unshift(node.val);
    } else {
      result[depth] = [node.val];
    }

    if (node.left) queue.push({ node: node.left, depth: depth + 1 });
    if (node.right) queue.push({ node: node.right, depth: depth + 1 });
  }
  return result;
};
