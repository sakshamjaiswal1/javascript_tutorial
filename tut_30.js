console.log("this is tut 30");

const proto = {
  slogan: function () {
    return `This company is the best`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};
// this creates saksham Object
const harry = Object.create(proto);
harry.name = "harry";
harry.role = "programmer";

harry.changeName("Saksham2");
// console.log(harry);

// this also creates Harry object
const saksham = Object.create(proto, {
  name: { value: "Saksham", writable: true },
  role: { value: "Programmer" },
});
saksham.changeName("saksham2");
console.log(saksham);

// Employee Constructor

function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}
//  Slogan

Employee.prototype.slogan = function () {
  //  slogan: function () {
  return `This company is the best. regards ${this.name} `;
};

let saksham1 = new Employee("Saksham", 100000, 10);

console.log(saksham1.slogan());

// Programmer

function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}
// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("avi", 2000, 0, "javascript");
console.log(rohan);
console.log(rohan.slogan());
