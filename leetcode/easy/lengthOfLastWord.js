const lengthOfLastWord =(s)=>{
   let wordsArr = s.split(' ')
   console.log(wordsArr)
while( wordsArr[wordsArr.length-1].length===0 ){
    wordsArr.pop()
}


   return wordsArr[wordsArr.length-1].length 

}

console.log(lengthOfLastWord("   fly me   to   the moon  "))