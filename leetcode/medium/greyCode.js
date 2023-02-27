var grayCode2 = function(n) {
    const count = Math.pow(2, n);
    const res = [], i = 0;
    for(let i = 0; i < count; i++){
        res[i] = i ^ (i >> 1);
    }
    return res;
};

const greyCode = (n) => {
  const count = Math.pow(2, n);
  const res = [];
  let i = 0;
  for (let i = 0; i < count; i++) {
    res[i] = i ^ (i >> 1);
  }
  return res;
};

// console.log(grayCode2(4));
