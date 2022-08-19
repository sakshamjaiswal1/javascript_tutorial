const checkDuplicates =(M,rowStart,rowEnd,colStart,colEnd)=>{
const seen = new Set()
for(let i= rowStart;i<rowEnd;i++){
    for(let j= colStart;j<colEnd;j++){
        if(M[i][j]==='.') continue
        if(seen.has(M[i][j])) return true
        seen.add(M[i][j])
    }
}
return false

}

const isValilidSudoku=(board)=>{
    const size = board.length
    for(let i=0;i<size;i++){
       if( checkDuplicates(board,i,i+1,0,size)) return false
    }
    for(let i=0;i<size;i++){
        if(checkDuplicates(board,0,size,i,i+1)) return false
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(checkDuplicates(board,3*i,3*(i+1),3*j,3*(j+1))) return false
        }
    }
      return true
}
console.log(isValilidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))