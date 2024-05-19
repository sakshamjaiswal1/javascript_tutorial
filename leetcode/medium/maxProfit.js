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
