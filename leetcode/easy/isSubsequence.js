const isSuSequence=(s,t)=>{
    let a=s.split("")
    let b=0
    for(let i=0;i<t.length;i++){
        if(a[b]===t[i]){
            b++
        }
    }
    return b===s.length
}

console.log(isSuSequence('abcc','ahbgdc'))