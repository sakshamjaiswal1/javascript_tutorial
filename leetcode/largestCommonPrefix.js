const longestCommonPrefix = function(strs) {
    let prefix =''
    let prev = ''
    
    if (strs.lenght===1) return strs[0]
    if (strs.length===0) return prefix
    for (let j =0; j<strs.length;j++){
        if(strs[j].length===0)return strs[j]
    prev = prefix
        prefix += strs[0][j]
        
        for (let i = 0 ; i<strs.length;i++){
            if(!strs[i].startsWith(prefix)) return prev
        }
    
    
    }
}