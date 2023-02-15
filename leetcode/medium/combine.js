const combine =(n,k)=>{
    const res =[]
    const helper = (comb,offset)=>{
        if(comb.length===k) return res.push([...comb])
        for(let i=offset;i<=n;i++){
            comb.push(i)
            helper(comb,i+1)
            comb.pop()
        }
    }

    helper([],1)
    return res
}