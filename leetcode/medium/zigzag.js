const convert = function (s, numRows) {
  const len = s.length;
  const arr = [];
  let j = 0;
  let i = 0;
  let str = "";

  if (numRows === 1) {
    return s;
  }
  while (i < len) {
    let temp = new Array(numRows);
    if (j == 0) {
      temp = [...s.slice(i, i + numRows)];
      arr.push(temp);
      i += numRows;
      j = numRows - 2;
    }
    temp = new Array(numRows);
    while (j > 0) {
      temp[j] = s[i];
      i++;
      j--;
      arr.push(temp);
      temp = new Array(numRows);
    }
  }
  const partititions = arr.length;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < partititions; j++) {
      if (arr[j][i]) {
        str += arr[j][i];
      }
    }
  }
  return str;
};
