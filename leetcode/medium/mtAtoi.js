const myAtoi = (s) => {
  s = s.trim();
  let res = 1;
  if (s[0] === "-") {
    res = -1;
    s = s.replace("-", "");
  } else if (s[0] === "+") {
    res = 1;
    s = s.replace("+", "");
  }
  if (!/[0-9]/.test(s[0])) return 0;
  let arr = [];
  let regex = new RegExp(/[0-9]/);
  for (let char of s) {
    if (regex.test(char)) {
      arr.push(char);
    } else {
      break;
    }
  }
  let str = arr.join("");
  if (!str) return 0;
  let num = parseInt(str) * res;
  if (num > Math.pow(2, 31) - 1) {
    num = Math.pow(2, 31) - 1;
  } else if (num < -1 * Math.pow(2, 31)) {
    num = -1 * Math.pow(2, 31);
  }
  return num;
};
