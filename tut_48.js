console.log("this is tut 48");
// regular Expressions
// basic functions
// metacharacter
// character set

let regex = /s[arrz]ksham/; //can be any character from bracket
regex = /s[^arrz]ksham/; //cannot be any character from bracket
regex = /s[A-Z]ksham/; //can eb any character from bracket

// Quantifiers
regex = /sak{0,3}/; //for counting no. of occurence of characters

// Groupings-parenthesis ()
regex = /(sak){2}/;

const str = "saaksak bhai"; // can be case sensitive

let result = regex.exec(str);
console.log("the result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str}  does not matches the expression ${regex.source}`
  );
}
