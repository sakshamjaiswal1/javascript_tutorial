// promise best video on promise
// resolve
// reject
// pending


console.log("this is tut 39");

function func1() {
  return new Promise(function (resolve, reject) {
    const error = true;
    setTimeout(() => {
      if (!error) {
        console.log(" Function: your promise has been resolved");
        resolve();
      } else {
        console.log(" Function:your promise has not been resolved");
        reject("Sorry not fulfilled");
      }
    }, 2000);
  });
}
func1()
  .then(function () {
    console.log(" Saksham:Thanks for resolving");
  })
  .catch(function (error) {
    console.log("Saksham:Very bad " + error);
  });
