const myPow = (x,n)=>{
    const rec =(x,n)=>{
        if(n===1){
            return x
        }
        if(n===0){
            return 1
        }
        const val = rec(x,Math.trunc(n/2))
        if(n%2===0){
            return val * val

        }
        else{
            return val * val * x
        }
    }
    if(n<0){
        x=1/x
        n=-n
    }
    return  rec (x,n)
}

console.log(myPow(2,6))