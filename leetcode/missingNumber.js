var missingNumber = function(nums) {
    let n= nums.length
    let sum = (n*(n+1))/2
    let arrSum = nums.reduce((curr,result)=>curr+result)
    
    return sum -arrSum
    
        
    };


    