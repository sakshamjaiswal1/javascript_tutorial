function sockMerchant(n, ar) {
    // Write your code here
let match =0
let matIndex=0
for ( let i=0;matIndex<ar.length;i++){
    let found= false
    for(let j=  matIndex+ 1;j<ar.length;j++){
        if(ar[matIndex]===ar[j]){
            found=true
            match++
            ar.splice(matIndex,1)
            ar.splice(j-1,1)
            break
        }
    }
if(!found){
    matIndex++
}

}
return console.log(match)
}

sockMerchant(7,[10 ,20 ,20 ,10, 10 ,30 ,50 ,10, 20])
