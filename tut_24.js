console.log('welcome to tut 24')

let today = new Date();
// console.log(today);
let other_date= new Date('8-4-2003 04:54:08');
//  other_date= new Date(' June 13 1976');
//  other_date= new Date(' 09/16/1976');


let a
a=other_date.getDate();
a=other_date.getMinutes();
other_date.setDate(24);
other_date.setMonth(6);
other_date.setMinutes(1);
other_date.setHours(9);



console.log(other_date)



console.log(a)