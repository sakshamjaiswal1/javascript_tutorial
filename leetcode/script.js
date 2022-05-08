const isPrime= (num)=>{
    for(let i=2;i<num;i++){
      if(num%i===0)return false
    }
    return true
}

console.log( isPrime(7))



const countPrime=(number)=>{
  let countPrime = 0 
   let numStr = number+''
   let numArr= numStr.split('')

   if(numArr.length<2){
       if( isPrime(parseInt( numArr[0]))){
           return 1
       }
       else{
           return 0
       }
   }
   else{
       if(isPrime(parseInt(numArr.join('')))){
           countPrime++
     
          
       }
    
       let numArr2= (number+'').split('')
       for(let i =1;i<numArr.length;i++){
      
        numArr2.pop()
       
           if(isPrime( parseInt(numArr2.join('')))){
              
            countPrime++
       
           }
       }
   }
   return countPrime
}

console.log( countPrime(7893))
 