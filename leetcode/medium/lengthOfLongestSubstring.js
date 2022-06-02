const lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let left = (right = 0);
  let max = 0;
  while (right < s.length) {
    if (right < s.length) {
      if (map.has(s[right])) {
        max = Math.max(max, right - left);
        left = map.get(s[right]) + 1;
        map.delete(s[right]);
        for (const [key, value] of map) {
          if (value < left) {
            map.delete(key);
          }
        }
      }
 
    }
    map.set(s[right],right)
    right++
  }
if(max===0) return s.length
max= Math.max(max,right-left)
return max

};

 console.log( lengthOfLongestSubstring("dvdxf"));
