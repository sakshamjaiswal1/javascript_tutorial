console.log("Problem4");

const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, d: 1, c: 1 };
const objC = { a: 1, d: 1, c: 1 };

// console.log(objA['a'])
// check if object have same keys
const objEqual = (a, b) => {
  key1 = Object.keys(a);
  key2 = Object.keys(b);
  let result;
  if (key1.length != key2.length) {
    return false;
  }
  for (let i = 0; i < key1.length; i++) {
    if (key1[i] == key2[i]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
};

// console.log(objEqual(objB, objC));
const objEqual2=(a,b)=>Object.keys(a).every((key)=>b[key])

// convert a csv to 2d array
const parseCSV=(csvString)=>csvString.split('\n').map((elem)=>elem.split(','))
const str= `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`

// console.log(parseCSV(str))

// generate random hexadecimal color code
const getRandomHexNumber=()=>Math.floor(Math.random()*16).toString(16)

const getRandomHexCode=()=>`#${getRandomHexNumber()}${getRandomHexNumber()}${getRandomHexNumber()}${getRandomHexNumber()}${getRandomHexNumber()}${getRandomHexNumber()}`


const getRandomHexCode2=()=>'#'+Array.from({length:6}).map(getRandomHexNumber).join('')

// console.log(getRandomHexCode2())
// console.log(Array.from({length:6}))

//  true if other function return true for array
// console.log([1,2,3,4,5].every(x=>x>0)) 

const isEveryElem=(arr,fn)=>{
for(let i=0;i<arr.length;i++){
    if(!fn(arr[i])){
        return false
    }
}
return true
}
const greater=(num)=>num>1?true:false

console.log( isEveryElem([1,2,3,4,5],greater))
