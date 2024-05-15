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

const isSameTree = (p, p) => {
  if (!p && !q) {
    return true;
  }
  if (p && q && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
};

const uniquePathsWithObstacles = (obstacleGrid) => {
  if (!obstacleGrid || obstacleGrid[0][0] === 1) {
    return 0;
  }
  const rows = obstacleGrid?.length;
  const cols = obstacleGrid?.[0]?.length;
  const dp = new Array(cols).fill(0);
  dp[0] = 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (obstacleGrid[r][c] === 1) {
        dp[c] = 0;
      } else {
        if (c > 0) {
          dp[c] += dp[c - 1];
        }
      }
    }
  }
  return dp[cols - 1];
};

const minPathSum = function (grid) {
  let previousRow = Array(grid[0].length).fill(Infinity);
  previousRow[previousRow.length - 1] = 0;

  for (let row = grid.length - 1; row >= 0; row--) {
    const currentRow = Array(grid[0].length).fill(0);

    for (let col = grid[0].length - 1; col >= 0; col--) {
      const bottomCell = previousRow[col];
      const rightCell = currentRow[col + 1] ?? Infinity;

      currentRow[col] = Math.min(bottomCell, rightCell) + grid[row][col];
    }
    previousRow = currentRow;
  }

  return previousRow[0];
};

const minDistance = function (word1, word2) {
  let m = word1.length;
  let n = word2.length;
  let dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if ((i == 0) & (j == 0)) {
        dp[i][j] = 0;
      } else if (i == 0) {
        dp[i][j] = j;
      } else if (j == 0) {
        dp[i][j] = i;
      } else {
        if (word1[i - 1] == word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            Math.min(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1),
            dp[i][j - 1] + 1
          );
        }
      }
    }
  }
  return dp[m][n];
};

const searchMatrix = function (matrix, target) {
  let [rows, cols] = [matrix.length, matrix?.[0].length];
  let [top, bot] = [0, rows - 1];
  while (top <= bot) {
    let row = Math.floor((top + bot) / 2);
    if (target > matrix[row][cols - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bot = row - 1;
    } else {
      break;
    }
  }

  if (!(top <= bot)) {
    return false;
  }
  let row = Math.floor((top + bot) / 2);
  let [left, right] = [0, cols - 1];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target > matrix[row][mid]) {
      left = mid + 1;
    } else if (target < matrix[row][mid]) {
      right = mid - 1;
    } else if (target == matrix[row][mid]) {
      return true;
    }
  }
  return false;
};
const buildTrees = function (inorder, postorder) {
  let hash = {};
  for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i;

  let recur = function (start, end) {
    if (start > end) return null;
    let val = postorder.pop();
    let root = new TreeNode(val);
    root.right = recur(hash[val] + 1, end);
    root.left = recur(start, hash[val] - 1);
    return root;
  };

  return recur(0, inorder.length - 1);
};
const sortedListToBST = function (head) {
  function getarr(head) {
    if (!head) return [];
    let temp = head;
    let out = [];
    while (temp) {
      out.push(temp.val);
      temp = temp.next;
    }
    return out;
  }
  function tree(nums, start = 0, end = nums.length - 1) {
    if (start <= end) {
      let mid = Math.floor((start + end) / 2);
      // console.log(mid, end)
      let root = new TreeNode(nums[mid]);
      root.left = tree(nums, start, mid - 1);
      root.right = tree(nums, mid + 1, end);
      return root;
    }
    return null;
  }
  let arr = getarr(head);
  return tree(arr);
};

const isBalanced = function (root) {
  const height = (node) => {
    if (node === null) {
      return -1;
    }
    return 1 + Math.max(height(node.left), height(node.right));
  };
  if (root === null) {
    return true;
  } else {
    let diff = Math.abs(height(root.left) - height(root.right));
    return diff < 2 && isBalanced(root.left) && isBalanced(root.right);
  }
};

const minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }
  if (root.left === null) {
    return minDepth(root.right) + 1;
  }
  if (root.right === null) {
    return minDepth(root.left) + 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

const hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  if (root.val === targetSum && !root.left && !root.right) {
    return true;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

const pathSum = function (root, targetSum) {
  const ans = [];
  const fun = (node, path, sum) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      if (sum === node.val) {
        ans.push([...path, node.val]);
      }
      return;
    }
    fun(node.left, [...path, node.val], sum - node.val);
    fun(node.right, [...path, node.val], sum - node.val);
  };
  fun(root, [], targetSum);
  return ans;
};

const pathSumSelf = function (root, targetSum) {
  const paths = [];
  const calculatePath = (node, path, targetSumInner) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      if (node.val === targetSumInner) {
        paths.push([...path, node.val]);
      }
      return;
    }

    calculatePath(node.left, [...path, node.val], targetSumInner - node.val);
    calculatePath(node.right, [...path, node.val], targetSumInner - node.val);
  };

  calculatePath(root, [], targetSum);
  return paths;
};

const flatten = (root) => {
  let head = null;
  const revPreOrder = (node) => {
    if (node.right) {
      revPreOrder(node.right);
    }
    if (node.left) {
      revPreOrder(node.left);
    }
    (node.left = null), (node.right = head), (head = node);
  };
  if (root) revPreOrder(root);
};

const connect = function (root) {
  if (!root || !root.left) {
    return root;
  }
  root.left.next = root.right;
  root.right.next = root?.next ? root.next.left : null;
  connect(root.left);
  connect(root.right);
  return root;
};

const levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }

  function findDeepestLevel(root) {
    if (!root) {
      return 0;
    }
    return (
      1 + Math.max(findDeepestLevel(root.left), findDeepestLevel(root.right))
    );
  }
  function helper(res, node, level) {
    if (!node) {
      return null;
    }
    res[level]?.push(node.val);
    helper(res, node.left, level - 1);
    helper(res, node.right, level - 1);
  }
  const level = findDeepestLevel(root);
  const res = [];
  for (let i = 0; i < level; i++) {
    res.push([]);
  }
  helper(res, root, level - 1);
  return res;
};
