console.log('this is deleting array')

let arr = ['pop','shift','filter','splice']

// console.log(arr.splice(0,2),arr)

// deleting specific element from the array

let specific=(arrs,str)=>{
    arrs.forEach((element,index)=>{
        if(element==str){
            arr.splice(index,1)
        }
    })
    return console.log(arrs)
}

// specific(arr,'filter')

const deleteWithFilter=(arrs,str)=>{

let mainArr=   arrs.filter((elem)=>str!==elem)
return console.log(mainArr)
}

deleteWithFilter(arr,'splice')
