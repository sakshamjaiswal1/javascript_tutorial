console.log("problem2");

const makeNewString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

// console.log(makeNewString('abc555def'))
// Printing the first half of the string
const firstHalf = (str) =>
  str.length % 2 == 0 ? str.slice(0, str.length / 2) : "It is not even lenght";

// concatenate two string except their first value

const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);

// console.log(concatenate('ssaksham','jjaiswal'))
// number nearest to 100

const nearHundres = (num1, num2) => {
    let result
    if (num1>100 &&num2>100 ){
       if ((num1-100)<(num1-100)){
            result=num1
       }
       else{
           result=num2
       }
    }
    else if(num1<100&&num2<100){
        if ((100-num1)<(100-num2)){
            result=num1
       }
       else{
           result=num2
       }
    }
    else if(num1<100&&num2>100){
        if ((100-num1)<(num2-100)){
            result=num1
       }
       else{
           result=num2
       }
    }
    else {
        if ((num1-100)<(100-num2)){
            result=num1
       }
       else{
           result=num2
       }
    }
  return result  
};

console.log(nearHundres(112,110))

// given string contains the occurences
const countChars = (str, char) => {
  let length = str.split("").filter((ch) => ch === char).length;
  return length >= 2 && length <= 4 ? true : false;
};

// console.log(countChars("s", "s"));
let btn=document.getElementById('btn')

btn.addEventListener('')
