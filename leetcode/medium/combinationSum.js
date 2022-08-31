const combinationSum = (candidates,target)=>{
    const res=[]
    const track=[]
    const sorted=candidates.sort((a,b)=>a-b)
    let trackSum=0
    const backTrack =(nums,start)=>{
        if(trackSum===target){
            res.push(track.slice())
            return 
        }
        if(trackSum>target) return
        for(let i=start;i<nums.length;i++){
            track.push(nums[i])
            trackSum +=nums[i]
            backTrack(nums,i)
            track.pop()
            trackSum-=nums[i]
        }
    }
    backTrack(sorted,0)
    return res

}

console.log(combinationSum( [2,3,6,7],7))