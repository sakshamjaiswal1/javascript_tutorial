var plusOne = function (digits) {
  let integ = parseInt(digits.join(""));
   integ=integ+1;
   
  return console.log(integ.toString().split(""));
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
