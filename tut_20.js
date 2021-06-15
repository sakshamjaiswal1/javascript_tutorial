console.log('this is tut_20')
//  add akey value inside local storage
let impArray=['aadrak','shimlamirch','chukandar']

localStorage.setItem('name2','saksham');
localStorage.setItem('name','aviroop');
localStorage.setItem('sabzi',JSON.stringify (impArray));
// localStorage.clear()

// clear particular key

localStorage.removeItem('name2')
// retrive an item from the local storage
let name =JSON.parse(localStorage.getItem('sabzi'))
// console.log(name)

sessionStorage.setItem('name2','saksham');
sessionStorage.setItem('name','aviroop');
sessionStorage.setItem('sabzi',JSON.stringify (impArray));

let ses= sessionStorage.getItem('name2')
console.log(ses)