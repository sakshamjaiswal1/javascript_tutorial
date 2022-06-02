const twoSum = (nums,target)=>{
 for (let i=0;i<nums.length;i++){
     let hold = target-nums[i]
     if(nums.includes(hold)&&i!==nums.indexOf(hold)){
        return [i,nums.indexOf(hold)]
     }
 }
}