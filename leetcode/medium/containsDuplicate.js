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

// is symmetric

const isSymmetricR = (root) => {
  if (root == null) {
    return true;
  }
  return isMirror(root?.left, root?.right);
  function isMirror(leftNode, rightNode) {
    if (leftNode == null && rightNode == null) {
      return true;
    }
    if (leftNode == null || rightNode == null) {
      return false;
    }
    return (
      leftNode?.val === rightNode?.val &&
      isMirror(leftNode?.left, rightNode?.right) &&
      isMirror(leftNode?.right, rightNode?.left)
    );
  }
};

// max depth

const maxDepth = (root) => {
  if (!root) {
    return 0;
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return 1 + Math.max(left, right);
};

const maxDepthBFS = (root) => {
  if (!root) return 0;
  let depth = 0;
  let queue = [root];
  while (queue.length > 0) {
    const levelSize = queue?.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue?.shift();
      if (node?.left) queue.push(node?.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth;
};

const maxDepthDFSIterative = (root) => {
  if (!root) {
    return 0;
  }
  let stack = [{ node: root, level: 1 }];
  let depth = 0;
  while (stack.length > 0) {
    const { node, level } = stack.pop();
    depth = Math.max(depth, level);
    if (node.left) stack.push({ node: node.left, level: level + 1 });
    if (node.right) stack.push({ node: node?.right, level: level + 1 });
  }
  return depth;
};
