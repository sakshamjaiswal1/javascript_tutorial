const  convertToTitle = function(columnNumber) {
    let newStr=''
    while(columnNumber>0){
        columnNumber--
      newStr=String.fromCharCode((columnNumber%26)+65)+newStr 
      columnNumber= Math.floor(columnNumber/26) 
    }
    return newStr
};
console.log(convertToTitle(299))