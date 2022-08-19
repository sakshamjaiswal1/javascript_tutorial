const searchArray = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  let sInd = low;
  low = 0;
  high = nums.length-1
  while(low<=high){
    mid= Math.floor((low+high)/2)
    let rMid = (mid+sInd)%nums.length
    if(target===nums[rMid]){
        return rMid
    }
    else if (target<nums[rMid]){
        high= mid-1
    }
    else{
        low= mid +1
    }
  }
  return -1
};

console.log(searchArray([4,5,6,7,0,1,2],4))