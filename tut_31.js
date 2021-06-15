console.log("this is tut 31");

class Employee {
  constructor(name, experience, division) {
    this.name = name;
    this.experience = experience;
    this.division = division;
  }
  slogan() {
    return `I am ${this.name} and this company is amazing`;
  }
  joiningYear() {
    return 2021 - this.experience;
  }
  //   this can be used without making an Object
  static add(a, b) {
    return a + b;
  }
}

// let Saksham = new Employee("Saksham", 10, "Developer");
// console.log(Saksham.joiningYear());

// console.log(Employee.add(33, 45));

// inheritance
class Programmer extends Employee {
  constructor(name, experience, division, language, github) {
    super(name, experience, division);
    this.language = language;
    this.github = github;
  }
  favouriteLanguage() {
    if (this.language == "python") {
      return "python";
    } else {
      return "Javascript";
    }
  }
  static multiply(x, y) {
    return x * y;
  }
}

let rohan = new Programmer("Rohan", 10, "hacking", "javascript", "@rohan1");
console.log(rohan);
console.log(Programmer.multiply(22, 44));
