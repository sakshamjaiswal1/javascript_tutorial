const subsets = (nums) => {
  function genSubsets(arr, index, currSubSet, output) {
    if (index >= arr.length) {
      output.push([...currSubSet]);
      return;
    }
    currSubSet.push(arr[index]);
    genSubsets(arr, index + 1, currSubSet, output);
    currSubSet.pop();
    genSubsets(arr, index + 1, currSubSet, output);
  }
  const output = [];
  genSubsets(nums, 0, [], output);
  return output;
};



const subsets2 = (nums) => {
  const subsets = [[]];
  const generate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
      const size = subsets.length;
      for (let j = 0; j < size; j++) {
        const current = subsets[j];
        const newSub = [...current, nums[i]];
        subsets.push(newSub);
      }
    }
  };
  generate(nums);
  return subsets;
};
 console.log(subsets2([1, 2, 3,4]));