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

threeSumClosest([0,2,1,-3]
    ,1)

