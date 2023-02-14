const sortColors = (nums) => {
  const sort = (index, arr) => {
    let flag = true;
    for (let i = 0; i < index + 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        flag = false;
      }
    }
    return flag;
  };

  let flag = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      flag = false;
      while (flag === false) {
        flag = sort(i, nums);
      }
    }
  }
};
console.log(sortColors([2, 0, 2, 1, 1, 0]));
const getCamera = () => {
  if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
    console.log("Let's get this party started");

    navigator.mediaDevices.getUserMedia({ video: true });
  }
};

// getCamera()
// var sortColors = function(nums) {
//   let flag = true;
//   for(let i=0; i<nums.length-1; i++) {
//       if(nums[i]>nums[i+1]) {
//           flag = false;
//           while(flag == false) {
//             flag = sort(i,nums);
//           }
//       }
//   }
// };

// function sort(index, arr) {
//   let flag = true;
//   for(let i=0; i<index+1; i++) {
//       if(arr[i]>arr[i+1]) {
//           let temp = arr[i];
//           arr[i] = arr[i+1];
//           arr[i+1] = temp;
//           flag = false;
//       }
//   }
//   return flag;
// }
