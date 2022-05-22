const powerOfthree =(n)=>{
    if(n===0) return false
    const expon = Math.floor(Math.log(n)/Math.log(3))
    const power = Math.pow(3,expon)===n
if(power){
    return power
}
    return false
}