console.log("problem1");

const checkFun = (x, y) => x === 100 || y === 100 || x + y === 100;

// console.log(checkFun(50,50))

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

// console.log(getFileExtension('app.js'))

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

// console.log(moveCharsForward("sak"));

const fromatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth();
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
};

// console.log(fromatDate())
const addnew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);
// console.log(addnew('New gifts'))

// string
// number
// bollean
// null,undefined

// array,

 
//  console.log(str.split('').join(''))
//  console.log('abc'+5)
// let arr =[1,2,3,4,5]
// arr.push(7)
// arr.pop()
// arr.pop()
//  console.log(arr.reverse())
// console.log(arr.filter((elem)=>elem!=2))

// console.log(arr)

// let str1 ='55'
// let num1=55

// console.log(str1==num1)

// var arr1=[1,2,3] 
// dsdcfsdcsdc
// var arr1=[1,2,4]


// dffrdfsdfs
// console.log(arr1)

let obj={
  abc:'sak',
  sak:'abc'
}
// console.log(obj.sak)

// if else   if else if else

function isEven(num){
let result
if(num%2==0){
result=true
}
else{
result=false
}
return result
}

console.log(isEven(6))