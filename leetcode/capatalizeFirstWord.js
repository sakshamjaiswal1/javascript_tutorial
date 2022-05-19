console.log("This is test");

// capitalizing first letter of the string

const capital =(str)=>{
 let words =str.split(' ')
let capitalWord=[]
words.forEach(element => {
    capitalWord.push(element[0].toUpperCase()+element.slice(1,element.length))
});
return capitalWord.join(' ')
}
console.log(capital('saksham aiswal'))
