const maxArea = (height) => {
  let area = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    area = Math.max(
      area,
      (right - left) * Math.min(height[left], height[right])
    );
    if (height[left] < height[right]) left++;
    else right--;
  }

  return console.log(area);
};

const evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens?.length; i++) {
    let num = Number(tokens[i]);
    if (!isNaN(num)) {
      stack.push(num);
    } else {
      let last = stack.pop();
      let last2 = stack.pop();
      switch (tokens?.[i]) {
        case "+":
          result = last2 + last;
          break;
        case "-":
          result = last2 - last;
        case "*":
          result = last2 * last;
        case "/":
          result = Math.trunc(last2 / last);
      }
      stack.push(result);
    }
  }
  return stack.pop();
};
