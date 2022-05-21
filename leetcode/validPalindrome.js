const validPalindrome=(s)=>{
    s = s.replace(/[_\W]/g,'').toLowerCase()

    for(let value in s){
        if(s[value]!==s[(s.length-1)-value]){
                return false
        }
    }

    return true
}


// console.log(validPalindrome('A man, a plan, a canal: Panama'))
const isValidChar = (char)=>{
    return (/[a-zA-Z0-9]/).test(char)
}


const validPalindrome2 =(s)=>{
 let left =0
 let right = s.length-1
 while(left<right){
     while(left<right &&!isValidChar(s.charAt(left))){
         left++
     }
     while(left<right &&!isValidChar(right)){
         right--
     }
     if(s.charAt(left).toLowerCase()!==s.charAt(right).toLowerCase()){
        return false
     }
     left++
     right--
 }
 return true
}
console.log(validPalindrome2('A man, a plan, a canal: Panama'))