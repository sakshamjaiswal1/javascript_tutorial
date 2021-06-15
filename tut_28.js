console.log('this is tut 28');

// object literal

let obj={
    name:'saksham',
    channel: 'creatorhub',
    address:'earth'
}

function Obj(givenname) {
    this.name=givenname
}

Obj.prototype.getname=function () {
    return this.name;
}
Obj.prototype.setname=function (newname) {
    return this.name= newname;
}
let obj2 = new Obj('saksham') 

console.log(obj2);