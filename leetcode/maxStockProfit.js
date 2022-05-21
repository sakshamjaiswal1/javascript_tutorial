var maxProfit = function (prices) {
  let buy = 0;
  let sell = 1;
  let max_profit = 0;
  for (let i = 1; sell < prices.length; i++) {
    if (prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy];
      max_profit = Math.max(max_profit, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return console.log(max_profit);
};
maxProfit([7, 1, 5, 3, 6, 4, 5, 1]);
