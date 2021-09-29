console.log('this is tut_18')

//  let btn=document.getElementById('btn')

//  btn.addEventListener('click',func1);
//  btn.addEventListener('dblclick',func2);
//  btn.addEventListener('mousedown',func3);



//  function func1(e) {
//     // console.log('thanks',e);
//     e.preventDefault();     
//  }
 
//  function func2(e) {
//     console.log('thanks for double clicking',e);
//     e.preventDefault();     
//  }
 
//  function func3(e) {
//     console.log('this is a mousedown',e);
//     e.preventDefault();     
//  }

// document.querySelector('.no').addEventListener('mouseover',function (e) {
//     console.log('mouse has come here');
// });

// document.querySelector('.no').addEventListener('mouseleave',function (e) {
//     console.log('mouse has exited');
// });

document.querySelector('.container').addEventListener('mousemove',function (e) {
    console.log('you trigtgered mouse move');
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},154)`
    // console.log(e.offsetX)
    // console.log(e.offsetY)

});