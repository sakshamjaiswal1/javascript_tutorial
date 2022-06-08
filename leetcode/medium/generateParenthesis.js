const generateParenthesis = (n) => {
  let ans = [];
  const combination = (open, close, curr) => {
    if (close === n) {
      ans.push(curr);
      return;
    }
    if (open < n) {
      combination(open + 1, close, curr + "(");
    }
    if (close < open) {
      combination(open, close + 1, curr + ")");
    }
  };
  combination(1, 0, "(");
  return console.log(ans);
};
// generateParenthesis(3)

var removeElement = function (nums, val) {
  let i = nums.indexOf(val);
  if (i===-1) {
    return console.log(nums);
  }

  while (i < nums.length) {
     
      nums.splice(i, 1);
     
      i=nums.indexOf(val);
      if(i===-1) return console.log(nums)
    
  }
  return console.log(nums);
};

removeElement([3, 2, 2, 3], 3);
