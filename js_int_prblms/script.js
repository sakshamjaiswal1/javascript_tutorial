console.log("qstn starts");

// let arr = [1, 2, 3, 4, 5];

// let arr2 = arr.reduce((total, i) => total + i, 0);
// console.log(arr2);

// let people = [
//   {
//     name: "Sak",
//     age: 22,
//   },
//   { name: "tan", age: 22 },
//   {
//     name: "geets",
//     age: 24,
//   },
// ];

// let pep = people.reduce((group,person)=>{
//     let age= person.age
//     if(group[age]==null) group[age]=[]
//     group[age].push(person.name)
//     return group
// },{})
// console.log(pep)

// console.log("hello world");
// console.log(this)
// console.log(x)
// var x=3

// var x =3

let main = document.getElementById('main')
let btn = document.getElementById('btn')

function handler (){
    console.log('i am clicked')
    btn.innerHTML='clicked'
    btn.style.backgroundColor='green'
    btn.style.padding='30px'
  
}


// console.log(main)
btn.addEventListener('click',()=>{
    console.log('i am clicked')
    main.innerHTML='saksham'
})




