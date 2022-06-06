const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b);

  let result = [];
  let len = nums.length;

  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j =i+1; j < len - 2; j++) {
      let l = j + 1;
      let r = nums.length - 1;
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          result.push([nums[i] ,nums[j] , nums[l] ,nums[r]]);
          while (nums[l + 1] === nums[l]) l++;
          while (nums[r- 1] === nums[r]) r--;
          l++;
          r--;
        } else if (sum > target) {
          r--;
        } else {
          l++;
        }
      }
    }
  }
  return result;
};

console.log( fourSum( [1, 0, -1, 0, -2, 2], 0));
