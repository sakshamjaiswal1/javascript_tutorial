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

export default ArrayWrapper