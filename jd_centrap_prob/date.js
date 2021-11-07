function getDatesBtween(from, to){

    var from  = new Date(from),
        to    = new Date(to),
        dates = [];

 

    while(from <= to){

        dates.push(`${new Date(from).getDate()}/${new Date(from).getMonth()}/${new Date(from).getFullYear()}`,);

        from.setDate( from.getDate() + 1 );

    }

    return dates;

}

var dates = getDatesBtween("2015/01/15", "2015/02/15");

console.log(dates);

function check(){
for (let index = 0; index < dates.length+1; index++) {
    if(dates[index]=='15/0/2015'){
        return console.log(true)
    }
    
}
console.log('dddddd')
}
check()
console.log('dddd')
let arr=[1,2,3,4]
console.log(arr.includes(5))
// console.log(new Date().getFullYear())
console.log(`${new Date().getFullYear()}-${ new Date().getMonth()+1<10? `0`+new Date().getMonth()+1:new Date().getMonth()+1}-${new Date().getDate()<10? '0'+ new Date().getDate():new Date().getDate()}`)