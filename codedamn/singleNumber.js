function singleNumber(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}
class ArrayWrapper {
	constructor(nums) {
        this.nums= nums
    }

	valueOf() {
       return this.nums.reduce((acc,curr)=>acc+curr,0)
    }

	toString() {
       return `[${this.nums.join(",")}]` 
    }
}

function missingNumber(nums){
  const totalSum = (nums.length+1 * nums.length)/2
  const arraySum = nums.reduce((acc,curr)=>acc+curr,0)

  return totalSum-arraySum
}