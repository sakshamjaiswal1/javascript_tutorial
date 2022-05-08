var intToRoman = function(num) {
    const r1 = [["I","V"],["X","L"],["C","D"],["M"]]
    const result = []
    const nums = num.toString().split('').reverse()
    for (let i=0;i<nums.length;i++){
        let sum1 = r1[i]
        let roman =''
        const currDigit = parseInt(nums[i])
        if(currDigit<4){
            for(let j = 1; j<=currDigit;){
                roman+=sum1[0]
            }
        }
        else if (currDigit===4){
            roman +=sum1[0]+''+sum1[1]
        }
        else if (currDigit>4 && currDigit<9){
            roman+=sum1[1]
            for(let k = 0; k<currDigit-5;k++){
                roman +=sum[1]
            }
        }
        else {
            const sumNext=r1[i+1]
            roman+=sum1[0]+''+sumNext[0]
        }
        result.unshift(roman)
        
    }
    return result.join('')
};
console.log( intToRoman(45))