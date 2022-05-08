console.log("Leetcode1")
var twoSum = function(nums, target) {
    let out =[]
    for (let i=0;i<nums.length-1;i++){
        // console.log(i)
        for(let j= i+1;j<nums.length;j++){
    //    console.log(nums[i]+nums[j]===target)
        if(nums[i]+nums[j]===target){
            
            return   console.log([i,j])
        }
      }
    }
    return console.log(out)
  
};
twoSum([2,7,11,15],26)

let arrNum = [1,2,3,4,5,6]

let sum=0
arrNum.forEach((elem,index)=>{
    sum+=elem
  
})
console.log(sum)