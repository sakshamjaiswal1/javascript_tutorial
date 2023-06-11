function singleNumber(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((acc, curr) => acc + curr, 0);
  }

  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

function missingNumber(nums) {
  const totalSum = (nums.length + 1 * nums.length) / 2;
  const arraySum = nums.reduce((acc, curr) => acc + curr, 0);

  return totalSum - arraySum;
}

function findRestaurant(list1, list2) {
  let result = [];
  let sum = Infinity;

  for (let i = 0; i < list1.length; i++) {
    const secondIndex = list2.findIndexOf(list1[i]);
    if (secondIndex > -1) {
      const currentSum = secondIndex + i;
      if (currentSum < sum) {
        result = [list1[i]];
      } else if (currentSum === sum) {
        result.push(list1[i]);
      }
    }
  }
  return result;
}
