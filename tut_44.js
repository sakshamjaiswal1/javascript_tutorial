console.log("this is tut 44");

// pretend this is coming from a server
let a = "Saksham bhai";
a = undefined;
if (a != undefined) {
  throw new Error("this is not undefined");
} else {
  console.log("this is undefined");
}

try {
  console.log("we are inside try block");
  saksham();
} catch (error) {
  console.log("are you okay");
  console.log(error);
} finally {
  console.log("finally we will run this");
}
