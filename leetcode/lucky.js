let arr =[1,2,3,4,5]


 let arr2= arr.map((item,index)=>item*2)

console.log(arr2)

let newArr=[]
let arr3=   arr.forEach((elem,index)=>{
    newArr.push(elem*2)
})

console.log(newArr)