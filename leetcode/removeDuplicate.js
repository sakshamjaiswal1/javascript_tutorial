const removeDuplicate= (nums)=>{
    let slow =0
    let fast = 0
    let noDup=[]
    while (fast<nums.length){
        if (nums[slow]!==nums[fast]){
            slow++
            nums[slow]= nums[fast]
            noDup.push(nums[slow])

        }
        else{
            fast++
        }
    }
    console.log(noDup)
    return (slow+1)
}


console.log( removeDuplicate([1,2,3,3,3,4,6,3,1,6]))