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

  for (let i = 0; i < tokens.length; i++) {
    let num = Number(tokens[i]);
    if (!isNaN(num)) {
      stack.push(Number(tokens[i]));
    } else {
      let last = stack.pop();
      let last2 = stack.pop();
      switch (tokens[i]) {
        case "+":
          result = last2 + last;
          break;
        case "-":
          result = last2 - last;
          break;
        case "*":
          result = last2 * last;
          break;
        case "/":
          result = Math.trunc(last2 / last);
          break;
      }
      stack.push(result);
    }
  }

  return stack.pop();
};

const findMin = function (nums) {
  let start = 0;
  let end = nums?.length - 1;
  let min = nums[0];
  while (start <= end) {
    if (nums[start] < nums[end]) {
      min = Math.min(min, nums[start]);
      break;
    }
    let mid = Math.floor((start + end) / 2);
    if (nums[start] <= nums[mid]) {
      min = Math.min(min, nums[start]);
      start = mid + 1;
    } else {
      min = Math.min(min, nums[mid]);
      end = mid - 1;
    }
  }
  return mid;
};
