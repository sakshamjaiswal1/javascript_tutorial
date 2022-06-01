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

generate(10)
var getRow = function(rowIndex) {
    let row =[]
    for (let i =0;i<rowIndex;i++){
       let n=[]
        for(let j=0;j<i+1;j++){
            if(j===0||j===i){
                n[j]=1
            }
            else{
                n[j]=row[i-1][j-1]+row[i-1][j]
            }
         
        }
           row.push(n)
        
    }
    return console.log( row[rowIndex-1])
};
// getRow(5)


var getRow2 = function(rowIndex) {
    let row =[]
    for (let i =0;i<rowIndex;i++){
   if(i===0||i===rowIndex-1){
            row[i]=1
   }
    else if(rowIndex%2!==0 && i===rowIndex-1/2){
        row[i]=rowIndex+1
        
    }
    else if( i<rowIndex/2){
        row[i]=rowIndex-1*i
    }
        else{
            row[i]=(rowIndex-1)*(rowIndex-i)
        }
    
}
return console.log( row)
};

// getRow2(5)
