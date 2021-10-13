console.log("problem3");

// find even number in an array
const evenArray = (arr) => arr.filter((elem) => elem % 2 == 0);

// console.log(evenArray([1,2,3,4,5,6]))
// program to print even number till the number
const uptoEven = (num) => {
  let arr = [];
  for (let index = 0; index < num; index++) {
    if (index % 2 == 0) {
      arr.push(index);
    }
  }
  return arr.length;
};

// console.log(uptoEven(20))
// check if array is ascending or not
const isAscending = (arr) => {
  let result;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
};
// console.log(isAscending([1, 2, 3, 6, 1]));

// largest even number in an array
const largestEven = (arr) => {
    let newArr=arr.filter((elem)=>elem%2==0)
    let largest=newArr[0]
    for(let i=0;i<newArr.length;i++){
    if(newArr[i]>largest){
        largest=newArr[i]
    }
}
return largest
};

// console.log(largestEven([109,2,3,4,5,108]))
// const largestEven2=(arr)=>Math.max(...arr.filter((elem)=>elem%2==0))

// console.log(largestEven2([1009,2,3,4,5,108]))

// let arr=['1','2','3','4','5']
// console.log()
// replace first digit in the string with $ character

const replaceFirst =(str)=>{
    let result = false
    let value=0
   
   for(let i=0;i<str.length;i++) {
        if(str[i]==1||str[i]==2 ||str[i]==3|| str[i]==4||str[i]==5||str[i]==6||str[i]==7||str[i]==8||str[i]==9||str[i]==0){
            result=true
            // console.log(str[i]==1||2)
            str.replace(str[i],'$')
            
        }
    
    }
    return str
}

console.log(replaceFirst('saksss99'))

// let str='abc'
// let arr2=[1,2,3,4]
// arr2[0]=55
// str[0]='3'
// console.log(str)