const numDecoding = () => {
  const dp = [];
  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;
  
  for (let i = 2; i <= s.length; i++) {
      dp[i] = 0;
      
      const oneDigit = parseInt(s.slice(i-1, i));
      const twoDigits = parseInt(s.slice(i-2, i));
      
      if (oneDigit > 0) {
          dp[i] += dp[i-1];
      }
      
      if (twoDigits > 9 && twoDigits < 27) {
          dp[i] += dp[i-2];
      }
  }
  
  return dp[s.length]
};
