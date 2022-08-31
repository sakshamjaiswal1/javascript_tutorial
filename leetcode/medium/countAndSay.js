const countAndSay = (n) => {
  const sayNum = (str) => {
    let times = 1;
    let ret = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        times++;
      } else {
        ret = ret + times + str[i];
        times = 1;
      }
    }
    return ret;
  };

  if (n == "1") {
    return "1";
  } else {
    let ret = sayNum("1");
    for (let i = 1; i < n - 1; i++) {
      ret = sayNum(ret);
    }
    return console.log(ret);
  }
  
};
countAndSay(6)