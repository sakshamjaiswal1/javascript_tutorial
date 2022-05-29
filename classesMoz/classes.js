console.log("This is about classes");
// class decleartion

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// hoisting is different for classes
// they cannot be called without declaring

// class expressions

// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// console.log(Rectangle.name)

// let Rectangle = class RectangleManin {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };

//   console.log(Rectangle.name)

//   constructor for initilizing object withon class

// prototype methods

let Rectangle = class RectangleManin {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // getter
  get area() {
    return this.calcArea();
  }
  // method
  calcArea() {
    return this.height * this.width;
  }
};

const square = new Rectangle(10, 10);

// console.log(square.area)

// generator methods

class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }

  //   Method
  *getSides() {
    for (let side of this.sides) {
      yield side;
    }
  }
}
const pentagon = new Polygon(1, 2, 3, 4, 5);

// console.log(...pentagon.getSides())

// static methos cannot be called through class instance
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(3, 3);
const p2 = new Point(5, 3);

// console.log(p1.displayName)
// console.log(Point.distance(p1,p2))

// binding this prototype with and static method

// class Animal {
//   speak(){
//     return this
//   }
//   static eat (){
//     return this
//   }
// }

// let obj = new Animal()
// console.log(obj.speak())
// let speak = obj.speak
// console.log( speak())

// function Animal(){
//   Animal.prototype.speak = function(){
//     return this
//   }
//   Animal.eat= function(){
//     return this
//   }
// }

// let obj = new Animal()
// let eat = Animal.eat
//  let x=eat()

// let speak = obj.speak
// let y=speak()

// sub classing with extends

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} bark`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak(){
    super.speak()
    console.log(`${this.name} calls`)
  }
}
let jinjin= new Dog('jinjin')
jinjin.speak()