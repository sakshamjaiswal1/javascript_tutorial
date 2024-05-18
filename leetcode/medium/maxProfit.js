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
