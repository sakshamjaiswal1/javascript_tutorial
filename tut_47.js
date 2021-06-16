console.log("this is tut 47");

let regex = /saksham/;
// lets look in some meta character symbols
regex = /^sakk/; //exp start with
regex = /gs$/; //ends with
regex = /sak..am/; // matches any one character
regex = /saksh*m/; // matches any 0 or more character
regex = /i?sakshaml?/; //optional match
regex = /s\*aksham/; // escaping characters

let str = "s*aksham jaiswal is a good boy";

let result = regex.exec(str);
console.log("the result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str}  does not matches the expression ${regex.source}`
  );
}
