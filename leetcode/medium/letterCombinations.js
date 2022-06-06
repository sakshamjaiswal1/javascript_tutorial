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
    if(n===digits.length){
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
// console.log(letterCombinations1("23"))
function largestOfFour(arr) {
    
    let largeArr=[]
    for(let i=0;i<arr.length;i++){
        let large =-Infinity
        for(let j=0;j<arr[i].length;j++){
       
        if(arr[i][j]>large){
            large= arr[i][j]
        }
    
      }
      largeArr.push(large)
    }
  
    return console.log( largeArr);
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);