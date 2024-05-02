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

const buildTree = (preorder, inorder) => {
  if (!preorder?.length || !inorder?.length) {
    return null;
  }
  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder?.slice(1, mid + 1), inorder?.slice(0, mid));
  root.right = buildTree(preorder?.slice(mid + 1), inorder?.slice(mid + 1));
  return root;
};

const numTreeMemo = function (n, cache) {
  if (n == 1) {
    return 1;
  }
  if (cache[n]) return cache[n];
  let totalTrees = 0;
  for (let root = 1; root <= n; root++) {
    let leftTrees = 1;
    if (root > 1) {
      leftTrees = numTreeMemo(root - 1, cache);
    }
    let rightTrees = 1;
    if (root < n) rightTrees = numTreeMemo(n - root, cache);
    totalTrees += leftTrees * rightTrees;
  }
  cache[n] = totalTrees;
  return totalTrees;
};
const numTrees = function (n) {
  const cache = [];
  return numTreeMemo(n, cache);
};

const interleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const dp = Array(s2.length + 1).fill(false);

  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) {
        dp[j] = true;
      } else if (i === 0) {
        dp[j] = dp[j - 1] && s2[j - 1] === s3[i + j - 1];
      } else if (j === 0) {
        dp[j] = dp[j] && s1[i - 1] === s3[i + j - 1];
      } else {
        dp[j] =
          (dp[j] && s1[i - 1] === s3[i + j - 1]) ||
          (dp[j - 1] && s2[j - 1] === s3[i + j - 1]);
      }
    }
  }

  return dp[s2.length];
};

const recoverTree = function (root) {
  let first = null;
  let last = null;
  let prev = null;

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    if (prev && node.val < prev.val) {
      if (first === null) {
        first = prev;
      }
      last = node;
    }
    prev = node;
    dfs(node.right);
  }
  dfs(root, null);
  let temp = first.val;
  first.val = last.val;
  last.val = temp;
  return root;
};
