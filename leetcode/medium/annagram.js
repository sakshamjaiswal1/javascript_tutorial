const annagram = (nums) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const key = [...nums[i]].sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(nums[i]);
  }
  return Object.values(map);
};
console.log(annagram(["eat", "tea", "tan", "ate", "nat", "bat"]));


