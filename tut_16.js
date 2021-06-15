console.log('THIS IS TUT 16')



let elem = document.createElement('li')
let text =document.createTextNode('i work as a text node')
elem.className='childul'
elem.id='createdli'
elem.appendChild(text)
// elem.innerHTML=' <b>hello this is saksham speaking</b>'

let ul = document.querySelector('ul.this')
// console.log(ul);
ul.appendChild(elem)
// console.log(ul)

let elem2 = document.createElement('h3')
elem2.id='elem2'
elem2.className='elem2'
let tnode=document.createTextNode('this is a created node for elem2')
elem2.appendChild(tnode)
console.log(elem2)
myul.replaceChild(elem,document.getElementById('ulchild'))
// myul.removeChild(elem,document.getElementById('ulchild'))

let pr = elem2.hasAttribute('elem2')
console.log(pr)

let harry= document.createElement('div')
harry.id=("code")
info=document.createTextNode('go to code with harry website')

harry.innerHTML=`<a  id= link href='www.codewithharry.com'></a>`
// harry.innerHTML.innerHTML=" go to code with harry"
harry.children[0].innerHTML='go to code with harry'
console.log(harry.children[0]);
// console.log(harry)