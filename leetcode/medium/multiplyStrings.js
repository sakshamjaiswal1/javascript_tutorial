const multiply = (num1, num2) => {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  var products = [];
  for (let i = num2.length - 1; i >= 0; i--) {
    for (let j = num1.length - 1; j >= 0; j--) {
      products[i + j + 1] =
        products[i + j + 1] == undefined
          ? parseInt(num1[j]) * parseInt(num2[i])
          : products[i + j + 1] + parseInt(num1[j]) * parseInt(num2[i]);
    }
  }
  var carryOver = 0;
  for (let i = products.length - 1; i >= 0; i--) {
    if (products[i] != undefined) {
      let sum = Math.floor((products[i] + carryOver) % 10);
      carryOver = Math.floor((products[i] + carryOver) / 10);
      products[i] = sum;
    } else {
      products[i] = -1;
    }
  }
  if (carryOver != 0) {
    products[0] = carryOver;
  }
  let answer = "";
  for (let i = 0; i < products.length; i++) {
    answer = products[i] != -1 ? answer + products[i].toString() : answer + "";
  }
  return answer;
};
