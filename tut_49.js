console.log("this is tut 49");

// character classes
let regex = /\waksham/; //word character or_ alphanumeric character
regex = /\w+aksham/; // any number of word chracter
regex = /\Waksham/; // non word character capital W
regex = /\W+aksham/; //any number of non word
regex = /\d777/; // matching digit
regex = /\d+777/; //matching more then one digit
regex = /\D777/; // non digit one
regex = /\D+777/; // more then on enon digit
regex = /\s777/; //for one withespace
regex = /\s+777/; // more then on ewhite space
regex = /\S777/; // non-white space character
regex = /\S+777/; // more then one white space characters
regex = /bhai\b/; // word boundry
// assertions
regex = /s(?=a)/; // assertion characters
regex = /s(?!=a)/; // assertion of non-exixting characters

const str = " #$%saksham bhaifull on777"; // can be case sensitive

let result = regex.exec(str);
console.log("the result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str}  does not matches the expression ${regex.source}`
  );
}
