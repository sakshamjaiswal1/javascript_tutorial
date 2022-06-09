const findSubstring =(s, words)=>{
let len = words[0].length
let windowSize = len*words.length
if(s<windowSize) {
    return []
}
let m =  new Map() 
let res=[]
for(let i=0;i<words.length;i++){
    m.set(words[i],m.get(words[i])+1||1)
}
let start =0 
const isConcat =(s,m,len,start,end)=>{
    let chars= m.size
    for(let j=start;j<=end;j=j+len){
        let substr = s.substring(j,j+len)
        if(!m.has(substr)||m.get(substr===0))return false
        m.set(substr,m.get(substr)-1)
        if(m.get(substr)===0){
            chars--
        }
    }
    return chars ===0
    }
    

while(start+windowSize-1<s.length){
    if(isConcat(s,new Map(m),len,start,start + windowSize-1)){
       res.push(start)

    }
    start++
}
return res



}

console.log(  findSubstring(
    "wordgoodgoodgoodbestword",
    ["word","good","best","good"]))