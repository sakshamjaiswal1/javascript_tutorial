const  isAnagram = function(s, t) {
    let str = s.split('').sort().join('')
    let tr = t.split('').sort().join('')
    
    if(str.length!==tr.length){
        return false
    }
    else if( str===tr){
        return true
    }
    else{
        return false
    } 
    
    };

    // isAnagram("rat","car")


    const isAnagramMap =(s,t)=>{
        let sMap = new Map()
        let tMap = new Map()

        if(s.length!==t.length){
            return  console.log( false)
        }
        for (let i =0; i<s.length;i++){
            sMap.set(s[i],(sMap.get(s[i])||0)+1)
        }
        for (let j=0;j<t.length;j++){
            tMap.set(t[j],(tMap.get(t[j])||0)+1)
        }

        for(let k=0;k<tMap.size;k++){
            if(!(tMap.has(s[k])&& sMap.has(s[k]))){
                return  console.log( false)
            }
            if(tMap.get(s[k])!=sMap.get(s[k])){
                return  console.log( false)
            }

        }
        return  console.log( true)

    }

    isAnagramMap("anagram","nagaram")