var moveZeroes = function(nums) {
    let index=0
    let cut = false
    for(let i=index;i<nums.length;i++){
        
        if(nums[index]===0){
            cut = true
            nums.splice(index,1)
            nums.push(0)
        
        }
        else {
            cut =false
        }
        if(!cut){
            index++
        }
        
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))