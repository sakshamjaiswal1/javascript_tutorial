var intersect = function(nums1, nums2) {
    let intersection=[]
    
    for(let i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])){
            intersection.push(nums1[i])
            nums2.splice(nums2.indexOf(nums1[i]),1)
        }
    }
    return intersection
};


// with less time complexity
const intersect2=(nums1,nums2)=>{

let result =[]
const inter =(small,large)=>{
for(let i=0;i<small.length;i++){
    if(large.includes(small[i])){
        result.push(small[i])
        large.splice(large.indexOf(small[i]),1)
    }
}


}
if(nums1.length>nums2.length) inter(nums2,nums1)
else inter(nums1,nums2)
return result
}
// console.log(intersect2([1,32,4],[2,1,4]))
