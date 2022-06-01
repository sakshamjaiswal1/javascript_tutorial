const lengthOfLongestSubstring = function (s) {
  let unique = [];
  let total = 1;
  for (let i = 0; i < s.length; i++) {
    unique.push(s[i]);
    if (unique.includes(s[i + 1])||i===s.length-1) {
      if (total < unique.length) {
        total = unique.length;
      }
      unique = [];
    //   i=i-unique.length-1
    }
  }

  return console.log(total);
};

lengthOfLongestSubstring("dvdf");
