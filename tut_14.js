console.log("this is tut_14")

let element = document.getElementById("heading")
// element = element.childNodes[0]
element.style.color="green"
element.innerText="Saksham is a good boy"
// console.log(element.innerHTML);

let sel = document.querySelector('div'); 
// console.log(sel)


let elems= document.getElementsByClassName('child');
elems= document.getElementsByClassName('container')
elems=document.getElementsByTagName('div')
// console.log(elems);

// Array.from(elems).forEach(element => {
//     console.log(element)
//     element.style.color='black'
// });

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element)
    element.style.color='black'

}