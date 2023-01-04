const insert = function(intervals,newInterval){
    if(!intervals || !intervals.length){
        return [newInterval]
    }

 let i=0;
 const ans=[]   
 while(i<intervals.length && intervals[i][1]<newInterval[0]){
    ans.push(intervals[i++])
 }

 while(i<intervals.length && intervals[i][0]<=newInterval[1]){
    newInterval[0]=Math.min(intervals[i][0],newInterval[0])
    newInterval[1]=Math.max(intervals[i][1],newInterval[1])
    i++
 }
 ans.push(newInterval)
 while(i<intervals.length){
    ans.push(intervals[i++])
 }
 return ans
}

console.log(insert([[1,3],[6,9]],[2,5]))