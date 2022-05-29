const excelSheet =(column)=>{
    let total=[]
    for(let i=0;i<column.length;i++){
        total+=column.charCodeAt(i)-64
        if(i+1<column.length){
            total*=26
        }
    }
    return console.log(total)

}

excelSheet("AB")