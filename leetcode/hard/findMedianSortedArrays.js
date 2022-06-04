const findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1,...nums2].sort((a,b)=>a-b)
    if(merged.length%2!==0){
        return merged[(merged.length-1)/2]
    }
    let median =(merged[merged.length/2-1]+ merged[(merged.length)/2])/2

    return  median
    
};

console.log(findMedianSortedArrays([3],
    [-2,-1]))