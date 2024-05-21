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
