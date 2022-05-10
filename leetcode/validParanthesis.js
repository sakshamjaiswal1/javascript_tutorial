var isValid = function(s) {
    let stack =[]
    for ( let bracket of s){
     
        const  prevBracket = stack[stack.length-1]
        if (prevBracket==="(" && bracket ===")"){
                stack.pop()
        }
         else if (prevBracket==="[" && bracket ==="]"){
                stack.pop()
        }
         else if (prevBracket==="{" && bracket ==="}"){
                stack.pop()
        }
        else {
            stack.push(bracket)
        }
    }

    return stack.length===0
};
isValid('()')