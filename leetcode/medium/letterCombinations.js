const dfs1=(result,choices,digits,n,path)=>{
    if(n==digits.length){
        result.push(path)
    }
    else{
        const choice= choices[digits[n]]
        for (let i=0;i<choice.length;i++){
            dfs(result,choices,digits,n+1,path+choice[i])
        }
    }
}




const letterCombinations1=(digits)=>{
    if(!digits.length){
        return []
    }
    const choices = ['','', 'abc','def', 'ghi','jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const result=[]
    dfs1(result,choices,digits,0,'')
    return result
}

// console.log(letterCombinations1("23"))
const dfs=(result,choices,digits,n,path)=>{
    if(n===digits.lenght){
        result.push(path)
    }
    else{
        const choice= choices[digits[n]]
        for (let i=0;i<choice.length;i++){
            dfs(result,choices,digits,n+1,path+choice[i])
        }
    }
}


var letterCombinations = function(digits) {
    if(!digits.length){
        return []
    }
    const choices = ['','', 'abc','def', 'ghi','jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const result =[]
    dfs(result,choices,digits,0,'')
    return result
};
console.log(letterCombinations1("23"))