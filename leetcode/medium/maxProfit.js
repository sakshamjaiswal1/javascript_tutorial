const maxProfit = function (prices) {
  let output = 0;
  let currentPrice = prices[0];
  for (let i = 1; i < prices?.length; i++) {
    const price = prices[i];
    if (price < prices[i - 1]) {
      output += prices[i - 1] - currentPrice;
      currentPrice = price;
    }
  }
  if (prices[prices?.length - 1] >= prices[prices?.length - 2]) {
    output += prices[prices?.length - 1] - currentPrice;
  }
  return output;
};

const largestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let temp = 1;
  if (nums.length === 0) {
    return 0;
  }
  if (nums?.length === 1) {
    return 1;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      temp++;
      count = Math.max(count, temp);
    } else if (nums[i] === nums[i + 1]) {
      count = Math.max(count, temp);
    } else {
      temp = 1;
      count = Math.max(count, temp);
    }
  }
  return count;
};

const sumNumbers = function (root) {
  let num = 0;
  let sum = 0;
  inorder(root, num);
  function inorder(root, num) {
    if (root == null) {
      return;
    }
    let temp = num * 10 + root.val;
    if (root.left == null && root.right == null) {
      sum += temp;
    }
    inorder(root.left, temp);
    inorder(root.right, temp);
  }
  return sum;
};

const partition = function (s) {
  const isPalindrome = (sub) => {
    let left = 0;
    let right = sub?.length - 1;

    while (left < right) {
      if (sub[left++] !== sub[right--]) {
        return false;
      }
    }
    return true;
  };

  const backtrack = (start, path, partitions) => {
    if (start === s.length) {
      partitions.push([...path]);
      return;
    }
    for (let end = start + 1; end <= s.length; end++) {
      const sub = s.substring(start, end);
      if (isPalindrome(sub)) {
        path.push(sub);
        backtrack(end, path, partitions);
        path.pop();
      }
    }
  };

  const partitions = [];
  backtrack(0, [], partitions);
  return partitions;
};

const cloneGraph = function (node) {
  if (node === null) {
    return null;
  }
  let visited = new Map();
  function dfs(node) {
    if (visited.has(node)) {
      return visited.get(node);
    }
    let clone = new Node(node.val);
    visited.set(node, clone);
    for (let neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    return clone;
  }
  return dfs(node);
};

const canCompleteCircuit = function (gas, cost) {
  let li = 0;
  let low = 1e10;
  let s = 0;

  for (let i = 0; i < gas.length; i++) {
    s += gas[i] - cost[i];
    if (s <= low) {
      low = s;
      li = i;
    }
  }
  return s >= 0 ? (li + 1) % gas.length : -1;
};

const singleNumber = function (nums) {
  const count = {};
  nums?.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  for (const key of Object.keys(count)) {
    if (count[key] === 1) {
      return key;
    }
  }
};

const copyRandomList = function (head) {
  const hashMap = new Map();
  let cur = head;

  while (cur) {
    hashMap.set(cur, new Node(cur.val));
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    const copy = hashMap.get(cur);
    copy.next = hashMap.get(cur.next) || null;
    copy.random = hashMap.get(cur.random) || null;
    cur = cur.next;
  }

  return hashMap.get(head);
};
const wordBreak = function (s, wordDict) {
  const n = s.length;
  const wordSet = new Set(wordDict);
 const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;

        break;
      }
    }
  }
  return dp[n];
};
