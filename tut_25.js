console.log('this is tut 25')


// careate elem
let divElem= document.createElement('div');
// add text node to the given elem
let val =localStorage.getItem('text')
let text
if (val==null) {
    text = document.createTextNode('this is my element,click to edit it');
}
else{
    text=document.createTextNode(val);
}

divElem.appendChild(text);
divElem.setAttribute('class','elem');


// adding text area to it
divElem.setAttribute('id','elem');
divElem.setAttribute('style','border:2px solid black; width:180px; margin=34px; padding=23px;')
let container=document.querySelector('.container');
let first= document.getElementById('myfirst');

// insert the elem before first
container.insertBefore(divElem,first)
divElem.appendChild(text);

console.log(divElem,container,first);

// divelem event listner
divElem.addEventListener('click',function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas==0) {
        
    let html= elem.innerHTML;
  divElem.innerHTML=`<div class="mb-3">
  <textarea class="form-control textarea" id="textarea" rows="3"></textarea>
  </div>`;
  let textarea= document.getElementById('textarea');
  // let textarea1=document.getElementById('textarea')
  console.log(textarea)
  textarea.addEventListener('blur',function () {
      elem.innerHTML=textarea.value
      localStorage.setItem('text',textarea.value)
      
  })
  

}})



