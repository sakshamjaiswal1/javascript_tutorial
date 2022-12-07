const combinationSum2=(candidates,target)=>{
    const length = candidates.length
    const result =[]
    candidates.sort((a,b)=>a-b)
    const rec = (sum,idx,arr)=>{
        if(sum<0){
            return 
        }
        if(sum===0){
            result.push([...arr])

        }
        for(let i =idx; i<length;i++){
            if(i!==idx && candidates[i]===candidates[i-1]){
                continue;
            }
            else{
                arr.push(candidates[i])
                rec(sum-candidates[i],i+1,arr)
                arr.pop(candidates[i])
            }
        }
    }

    rec(target,0,[])
    return result
}
console.log(combinationSum2([10,1,2,7,6,1,5],8))

