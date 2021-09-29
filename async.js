console.log("Async tut");

// async function saksham() {
//   console.log("inside saksham func");
//   const response = await fetch("https://api.github.com/users");
//   console.log("before response");
//   const users = await response.json();
//   console.log("users resolved");
//   return users;

// }
// console.log("before calling saksham");
// let a = saksham();
// console.log("after calling saksham");
// console.log(a);
// a.then((data) => {
//   console.log(data);
// });
// console.log("last line");
// async return promise
// await works asyncrchonusly

// Filter function

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// {let number =[3,4,5,6,7,8]}

//  {let number =[3,4,5,6,7,8]
//     number =number.filter((num)=>{

//    return num==5})

// console.log(number)}

// let  number=[1,2,3,4];

// number[0]=4;
// number={sak:'javascript'}
// console.log(number);

// Array

// let x=[1,2,3,4,5]

// let y={
//   name:'saksham',
//   age:'24'
// }

// let z={
//   name:'neha'
// }

const lucky_seven = (arr) => {
  if (arr.length < 3) {
    return console.log("insert array of lengfth >3 ");
  }
  for (var i = 2; i < arr.length; i++) {
    console.log(arr[i] + arr[i - 1] + arr[i - 2]);
    if (arr[i] + arr[i - 1] + arr[i - 2] === 7) {
      return console.log("it is a lucky number");
    }
  }
  return console.log("it is not lucky seven");
};
// lucky_seven([0,0,7,5,3,2,11,4,7,77,0,0,7])

const sum_array = (arr) => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    // loop through each inner array
    for (var j = 0; j < arr[i].length; j++) {
      // add this number to the current final sum
      sum += arr[i][j];
    }
  }
  return console.log(sum);
};
// sum_array([[3, 434,1000,2], [4, 12[1], ]])
const summArray2 = (arr) => {
  let sum = 0;
  let bigArr = arr.reduce((element, index) => element.concat(index));
  for (var i = 0; i < bigArr.length; i++) {
    sum += bigArr[i];
  }
  // .reduce((t,e)=>t+e)
  return sum;
};

// console.log(summArray2([[3, 434,1000,2], [1], [4, 12]]))

// test divisor by 3

const test_divisor = (low, high) => {
  let output = [];
  for (let index = low; index <= high; index++) {
    output.push(index);
    if (index % 3 == 0) {
      output.push("div3");
    }
  }
  return console.log(output);
};
// test_divisor(5,25)

const oddball_sum = (nums) => {
  let final_count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] % 2 == 1) {
      final_count += nums[index];
    }
  }
  return console.log(final_count);
};
// oddball_sum([2,34,54,4545,45,45,4])

// const oddball_sum_reduce=(nums)=>{
//   nums.map((item,index)=>{
//   let total=0

//     if(index%2==1){
//      total=+item
//  return(console.log(total))
//   }
// })
// }

// oddball_sum_reduce([2,34,54,4545,45,45,4])

// sum of arrray +1

const sum_plus_one = (arr) => {
  let total = 0;
  for (let index = 0; index < arr.length; index++) {
    total += arr[index] + 1;
  }
  return console.log(total);
};
// sum_plus_one([1, 2, 3, 4, 5, 55]);
// checking for string rotaion

const if_reverse=(a,b)=>{
  console.log((a+a).indexOf(b))
}
// if_reverse('abcd','dcba')

// concat
let concat_arr=(arr)=>{
return console.log(arr.concat([1,2,3,4]));
}

// concat_arr([22,33,44,55])

let reverse_string=()=>{

}
let arr =[1,4,55,6]
let name='Saksham Jaiswal'
console.log(  name.split('').reverse().join(''))