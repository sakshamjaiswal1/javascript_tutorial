const canJump = (nums)=>{
        let lastIndex = nums.length-1;
        for(let i=nums.length-1;i>=0;i--){
            if(i+nums[i]>=lastIndex){
                lastIndex=i
            }
        }
    return lastIndex===0    
}

const canJump2 =(nums)=>{
    if(nums.length===1){
        return true
    }
    if(nums[0]===0){
        return false
    }
    let currIdx = nums.length -1;
    for(let i=0;i<currIdx;i++){
        if(nums[i]>=(currIdx-i)){
            currIdx=i
            i=-1
        }
        if(currIdx===0){
            return true
        }
    }
    return false
}