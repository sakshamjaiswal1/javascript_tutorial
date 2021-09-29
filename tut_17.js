console.log('welcome to tut 17')

document.getElementById('heading').addEventListener('click',function(e) {
    let variable= e.target
    variable= e.offsetX;
    variable= e.clientX;


    // variable= e.target.classList[0]
    console.log('heading has been clicked')
    // location.href='//codewithharry.com'
    console.log(variable);
})