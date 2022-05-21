var reverseString = function(s) {
    
    for (let i of s){
      s.unshift(s[i])
      s.splice(i+1,1)
        
    }
console.log(s)
    };
reverseString(['s','a','k','s','h','a','m'])  
