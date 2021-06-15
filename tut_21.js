console.log('this is tut_21');
// creating the element to be inserted
let h1 =document.getElementById('heading');

 let div= document.createElement('div')
div.id= 'click'
div.innerHTML='click here to edit'
h1.appendChild(div)
//  console.log(div)
// console.log(h1)



// creating textarea and adding eventlistner
div.addEventListener('click',rep);
let text= document.createElement('textarea')
text.id='input'
text.placeholder='enter your message'       
function rep(e) {
  
    text.style='height:100px; width:200px;border:2px solid red;'
    //  console.log(text);
    div.replaceWith(text);
    // console.log(text)
    
}
text.addEventListener('blur',push);
function push(e) {
    let save= text.value
    localStorage.setItem('data',save)
}

text.addEventListener('dblclick',restore);

function restore(e) {
    text.replaceWith(div);
}
