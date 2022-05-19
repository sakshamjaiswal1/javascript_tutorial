var merge = function(nums1, m, nums2, n) {
    let ptr1 = 0;
   let ptr2 = 0;

   nums1.splice(m);

   while (ptr2 < n) {
       while (nums1[ptr1] <= nums2[ptr2]) {
           ptr1++;
       }

       nums1.splice(ptr1, 0, nums2[ptr2]);
       ptr1++; 

       ptr2++;
   }
};