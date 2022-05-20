const parent =()=>{
let myStr= 'saksham'

const child = ()=>{
    console.log(myStr)
}
return child

}


const child2 =parent()
// child2()
const counterP=()=>{
    let count =0
    const counterIn=()=>{
        return  console.log(count ++) 
    }
    return   counterIn
}
const counter = counterP()
//  counter()
// counter()
// counter()
// counter()

const timeCountP=()=>{
    let count =0
    setTimeout(()=>{
        let innerCount=0
        count++
        console.log('count is'+count)
        setTimeout(()=>{
            count++
            innerCount++
                console.log('outerCount is'+count,"innerCount is"+innerCount)
        },5000)

    },1000)
}

timeCountP()