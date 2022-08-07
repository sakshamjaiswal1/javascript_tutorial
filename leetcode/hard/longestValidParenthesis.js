const longestParenthesis = (s)=>{
    let stack =[-1]
    let max=0
    for(let i=0;i<s.length;i++){
        if(s[i]==='(') stack.push(i)
        else{
            stack.pop()
            if(stack.length===0)stack.push(i)
            let top = stack.length -1
            max = Math.max(max,i-stack[top])
        }
    }
    return console.log(max)
}

longestParenthesis("((((()")