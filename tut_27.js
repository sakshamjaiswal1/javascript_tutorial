console.log('this is tut 27');
// object literal for creating objects
let car={
    name:'maruti 800',
    topspeed:89,
    run:function () {
        console.log('car is running');
        
    }
}
console.log(car);

// we hav already seen constructor like these
// new Date();

function GeneralCar(givenname,giventopSpeed) {
    this.name=givenname;
    this.topSpeed=giventopSpeed;
    this.run=function () {
        console.log(`${this.name} is running`);
    }
    this.analysis=function () {
        console.log(`this car is slower by ${200-this.topSpeed}kmph than Mercedes`);
    }
}

car1= new GeneralCar('nissan',100);
car2= new GeneralCar('alto',80);
car3= new GeneralCar('mercedes',200);
console.log(car2.analysis())