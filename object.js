console.log("object");

let car = {
  name: "Maruti",
  topSpeed: "89",
  run: function () {
    console.log("function is running");
  },
};

function GeneralCar(givenName, speed) {
  this.name = givenName;
  this.topSpeed = speed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
}

let maruti = new GeneralCar("marutiee", 200);

// console.log(maruti.run())

function Obj(givenName) {
  this.name = givenName;
}
let obj2 = new Obj("saksam");

// console.log(obj2)

const proto = {
  slogan: function () {
    return "this company is best";
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

const saksham = Object.create(proto);
saksham.name = "Saksham";
saksham.role = "full stack";
saksham.changeName("Saksham Jaiswal");

// console.log(saksham)

function Employee(name, salary, experiene) {
  this.name = name;
  this.salary = salary;
  this.experiene = experiene;
}

Employee.prototype.slogan = function () {
  return `This Company is best regards ${this.name}`;
};

let SakEm = new Employee("Saksham", 5454545, 5);
// console.log(SakEm)

// function Programmer(name, salary, experience, language) {
//   Employee.call(this, name, salary, experience);
//   this.language = language;
// }

// inheriyt the prototype

// Programmer.prototype = Object.create(Employee.prototype);
// let aviroop = new Programmer("aviroop", 345344, 5, "js");

// console.log(aviroop.slogan())
// Es6 Classes

class Worker {
  constructor(name, experience, division) {
    this.name = name;
    this.experience = experience;
    this.division = division;
  }
  slogan() {
    return `I am ${this.name}`;
  }
  static add(a, b) {
    return a + b;
  }
}

let avi = new Worker("avinash", 3, "chapri");
// console.log(avi.slogan())
let arrst = ["3434", "4rf34", "34trf"];
let str = arrst.toString();
// console.log(str);
// console.log(Worker.add(3,4))

class Programmer extends Employee {
  constructor(name, experience, divison, language, github) {
    super(name, experience, divison);
    this.language = language;
    this.github = github;
  }
  favLanguage(){
      if (this.language=='python'){
          return 'Python'
      }
      else {
          return 'Javascript'
      }
  }
  static multiply (a,b){
      return a*b
  }
}
let sumit = new Programmer('Sumit','40','sde','javascript','sumit1')

console.log(Programmer.multiply(3,4))