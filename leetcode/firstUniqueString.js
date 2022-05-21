var firstUniqChar = function(s) {
    if (s.length === 0) return -1;

    for( let i = 0; i < s.length; i++) {
      
       if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
   }

   return -1

};

// console.log(firstUniqChar('loveleetcode'))

const firstUniqChar2 =(s)=>{
    const letterCount={}

    for(const letter of s){
        if(letterCount[letter]) letterCount[letter]++
        else letterCount[letter]=1
    }
    for(let i=0;i<s.length;i++){
        if(letterCount[s[i]]===1) return i 
    }

    return -1
}
console.log(firstUniqChar2('loveleetcode'))