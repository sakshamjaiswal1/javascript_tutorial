console.log("this is tut 43");

async function saksham() {
  console.log("inside saksham func");
  const response = await fetch("https://api.github.com/users");
  console.log("before response");
  const users = await response.json();
  console.log("users resolved");
  return users;

  //   return "harry";
}
console.log("before calling harry");
let a = saksham();
console.log("after calling harry");
console.log(a);
a.then((data) => {
  console.log(data);
});
console.log("last line");
// async return promise
// await works asyncrchonusly
