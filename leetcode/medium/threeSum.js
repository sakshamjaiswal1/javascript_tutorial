// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop

const threeSum = (nums) => {
  let sortNum = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sortNum.length; i++) {
    left = i + 1;
    right = sortNum.length - 1;
    if (i > 0 && sortNum[i] === sortNum[i - 1]) continue;
    while (left < right) {
      sum = sortNum[i] + sortNum[right] + sortNum[left];

      if (sum === 0) {
        let arr = [sortNum[i], sortNum[left], sortNum[right]];
        result.push(arr);
        left++;
        while (sortNum[left] === sortNum[left - 1] && left < right) left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return console.log(result);
};
threeSum([-1, 0, 1, 2, -1, -4]);

const threesum2 = (nums) => {
  let sortNum = nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sortNum.length; i++) {
    let left = i + 1;
    let right = sortNum.length - 1;
    if (i > 0 && sortNum[i] === sortNum[i - 1]) continue;
    while (left < right) {
      sum = sortNum[i] + sortNum[right] + sortNum[left];

      if (sum === 0) {
        let arr = [sortNum[i] + sortNum[left], sortNum[right]];
        left++;
        result.push(arr);
        while (sortNum[left] === sortNum[left - 1] && left < right) left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return console.log( result)
};
threesum2([-1, 0, 1, 2, -1, -4])