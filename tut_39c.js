console.log("this is tut 39c");

let find = document.getElementById("find");
let number = document.getElementById("number");
find.addEventListener("click", () => {
  function func1() {
    return new Promise(function (resolve, reject) {
      const error = true;
      setTimeout(() => {
        if (number.value % 2 == 0) {
          console.log(" the number entered is even");
          resolve();
        } else {
          console.log(" the number enteredf is odd");
          reject();
        }
      }, 2000);
    });
  }
  let number = document.getElementById("number");

  func1()
    .then(function () {
      console.log("this number is " + number.value / 2);
    })
    .catch(function () {
      console.log("ths number cannot be divided in two equal parts");
    });
});
