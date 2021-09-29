console.log("this is tut 46");

let reg = /saksham/g; //this is a regular expression literal in js
reg = /saksham/g; // g means global
reg = /saksham/i; //i means case insensitive

console.log(reg);
console.log(reg.source);

// functions to match expressions
let s = "this is great saksham and saksham is best web developer";
// exec()-This function will return an array for match or null for no match
let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);----> we can use multiple exec with global flag

result = reg.test(s);
// it gives true or false for the value present or not
// console.log(result);

//match will return array of result

// let result3 = reg.match(s); wrong method

let result3 = s.match(reg);
// console.log(result3);

// search()= return index of first match or -1
let result4 = s.search(reg);
console.log(result4);

// replace()= return new replaced strings with all the replacement
let result5 = s.replace(reg, "Shubham");
console.log(result5);
