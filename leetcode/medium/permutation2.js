const permutation2 = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  const res = [];
  const track = [];
  const visit = new Array(sorted.length).fill(false);
  const backtrack = (nums) => {
    if (track.length === nums.length) {
      res.push(track.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visit[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !visit[i - 1]) continue;

      track.push(nums[i]);
      visit[i] = true;
      backtrack(nums);
      track.pop();
      visit[i] = false;
    }
  };
  backtrack(sorted);
  return res;
};

console.log(permutation2([1, 9, 3, 4]));
