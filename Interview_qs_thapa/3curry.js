console.log("curry");

// traditional method
// const getSum = (a) => {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           return console.log(a + b + c + d + e);
//         };
//       };
//     };
//   };
// };

const getSum=(a)=>(b)=>(c)=>(d)=>(e)=>a+b+c+d+e

 console.log(getSum(5)(4)(3)(22)(1));
