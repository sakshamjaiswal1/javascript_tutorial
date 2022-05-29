var generate = function(numRows) {
    let result =[]
    
    for(let i =0;i<numRows;i++){
       let n=[]
        for(let j=0;j<i+1;j++){
                if(j===0||j===i){
                    n[j]=1
                }
            else{
                n[j]= result[i-1][j-1]+ result[i-1][j]
            }
       
        }
        result.push(n)
    
    }
    return  console.log (result)
};

generate(5)