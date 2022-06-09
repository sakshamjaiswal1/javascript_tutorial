const divide=(dividend,divisor)=>{
        if(dividend===0) return 0
   let signal =1
        if(dividend<0){
            signal*=-1
   }
   if(divisor<0){
       signal*=-1
   }
   dividend= Math.abs(dividend)
   divisor=Math.abs(divisor)

   let result = Math.floor(dividend/divisor)*signal
   if(result>Math.pow(2,31)-1){
    result = Math.pow(2,31)-1;
}else if(result<-1*Math.pow(2,31)){
    result = Math.pow(2,31)*(-1);
}
return result
}

function findElement(arr, func) {
    let num 
    for(let i=0;i<arr.lenght;i++){
          if(func(arr[i])){
              return arr[i]
          }
    }
    
    
    return num;
  
  
  }
  
//   console.log( findElement([1, 2, 3, 4], num => num % 2 === 0));
function titleCase(str) {
   let newStr= str.split(' ').map((item,index)=>item[0].toUpperCase()+item.slice(1,item.length)).join(' ')
    return newStr
  }
  
//  console.log( titleCase("I'm a little tea pot"));

function getIndexToIns(arr, num) {
    let index=0
    if(arr.length===0) return 0
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
      if(num>arr[i]){
        index++
      }
      else if (num>arr[arr.length-1]){
        return index++
      }
      else{
        return index
      }
    }
    
  }
  
//   console.log(getIndexToIns([2, 5, 10], 15))

function chunkArrayInGroups(arr, size) {
    let mainArr =[]
    for(let i=0;i<arr.length;i=i+size){
      let smallArr=[]
      for(let j=0;j<size;j++){
        if(i+j>arr.length-1) break  
        smallArr.push([i+j])
      }
      mainArr.push(smallArr)
    }
    return mainArr
  }
  
 console.log(   chunkArrayInGroups(["a", "b", "c", "d"], 2));

