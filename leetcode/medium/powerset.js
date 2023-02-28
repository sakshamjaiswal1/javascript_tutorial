
const superSetWithDup = () => {
  const res = [];
  const track = [];
  const backtrack = (nums, start) => {
    const sorted = nums.sort((a, b) => a - b);
    res.push(track.slice());
    for (let i = start; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] && i > start) continue;
      track.push(nums[i]);
      backtrack(nums, i + 1);
      track.pop();
    }
  };
  backtrack(nums, 0);
  return res;
};
