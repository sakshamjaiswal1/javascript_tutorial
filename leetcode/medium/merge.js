const merge =(intervals)=>{
    intervals.sort((a,b)=>a[0]-b[0])

    return intervals.filter((interval,i)=>{
        const [start,end]=intervals[i]
        const [nextStart,nextEnd]=intervals[i+1] ||[]
        let item = interval

        if(Number.isFinite(nextStart)&& nextStart <=end){
            let minVal = Math.min(start,nextStart)
            let maxVal= Math.max(end,nextEnd)
            intervals[i+1]=[minVal,maxVal]
            item=null
        }
        return item

    })
}