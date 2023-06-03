const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a-b);
  let arr=[]
  let res = Infinity
  for(let i=0;i<nums.length;i++){
      let l=i+1
      let r= nums.length-1
      while(l<r){
          let sum = nums[i]+nums[l]+nums[r]
       if(Math.abs(target-sum)<Math.abs(res-target))res=sum
       if(target>sum)l++    
       else r--
      }
  }
  return  console.log( res)
};

// threeSumClosest([0,2,1,-3]
//     ,1)

function factorialize(num) {
  let factorials = []
  let newNum=num
  let i=2
 while(newNum>1){
while(newNum%i<1){
    newNum=newNum/i
    factorials.push(i)
}
i++
 }

  return factorials
}

// console.log( factorialize(555));
let elem =[1,2,3,3,3,4,6,3,1,6]

const even= elem.filter((item)=>item%2===0)
console.log(even)
console.log(even)