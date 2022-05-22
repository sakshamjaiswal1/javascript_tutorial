const  maxSubArray = function(nums) {
    let maxValue = -Infinity
    let currValue =0
    for (let i=0;i<nums.length;i++){
        
        if(currValue<0){
            currValue=0
            
        }
        currValue += nums[i]
     maxValue = Math.max(currValue,maxValue)   
    }
    return maxValue
};

// console.log(maxSubArray([-2,-3,-1,-5]))


var maxSubArray2 = function(nums) {
    let max = nums[0];
    let sums = new Array(nums.length).fill(0);
    sums[0] = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        sums[i] = Math.max(nums[i], nums[i] + sums[i-1]);
        max = Math.max(sums[i], max);
    }
    
    return max;
};

// console.log(maxSubArray2([-2,-3,-1,-5]))