# 🚀 Advanced JavaScript Concepts - Interview Theory Guide

## Table of Contents

1. [Core JavaScript Concepts](#core-javascript-concepts)
2. [Asynchronous JavaScript](#asynchronous-javascript)
3. [Object-Oriented Programming](#object-oriented-programming)
4. [Functional Programming](#functional-programming)
5. [Advanced Patterns](#advanced-patterns)
6. [Performance & Optimization](#performance--optimization)
7. [ES6+ Features](#es6-features)
8. [Common Interview Questions](#common-interview-questions)

---

## Core JavaScript Concepts

### 1. Closures

**Definition**: A closure is formed when an inner function has access to the outer function's variables and parameters, even after the outer function has finished executing.

**Key Points**:

- Inner function retains access to outer function's scope
- Variables are preserved in memory
- Enables data privacy and encapsulation

**Example**:

```javascript
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Interview Questions**:

- How do closures work in JavaScript?
- What are the practical uses of closures?
- Can you explain memory implications of closures?

### 2. Hoisting

**Definition**: JavaScript's behavior of moving variable and function declarations to the top of their containing scope during compilation.

**Key Points**:

- `var` declarations are hoisted and initialized with `undefined`
- `let` and `const` are hoisted but not initialized (temporal dead zone)
- Function declarations are fully hoisted
- Function expressions are not hoisted

**Example**:

```javascript
console.log(x); // undefined (not error)
var x = 5;

console.log(y); // ReferenceError
let y = 10;

// Function hoisting
sayHello(); // Works!
function sayHello() {
  console.log("Hello!");
}

sayGoodbye(); // TypeError
var sayGoodbye = function () {
  console.log("Goodbye!");
};
```

### 3. Scope and Lexical Environment

**Types of Scope**:

- **Global Scope**: Variables accessible everywhere
- **Function Scope**: Variables accessible within function
- **Block Scope**: Variables accessible within block (let/const)

**Lexical Scoping**: Inner functions have access to variables in their outer scope.

```javascript
function outer() {
  const outerVar = "I'm from outer";

  function inner() {
    console.log(outerVar); // Accessible due to lexical scoping
  }

  return inner;
}

const innerFunc = outer();
innerFunc(); // "I'm from outer"
```

### 4. The `this` Keyword

**Definition**: `this` refers to the object that is executing the current function.

**Rules for `this` binding**:

1. **Default binding**: Global object (window in browser, global in Node.js)
2. **Implicit binding**: Object that calls the method
3. **Explicit binding**: Using call(), apply(), bind()
4. **Arrow functions**: Inherit `this` from enclosing scope

```javascript
// Implicit binding
const obj = {
  name: "John",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};
obj.greet(); // "Hello, John"

// Explicit binding
const person = { name: "Alice" };
obj.greet.call(person); // "Hello, Alice"

// Arrow function
const arrowObj = {
  name: "Bob",
  greet: () => {
    console.log(`Hello, ${this.name}`); // `this` refers to global
  },
};
```

---

## Asynchronous JavaScript

### 1. Event Loop

**Components**:

- **Call Stack**: Executes synchronous code
- **Web APIs**: Handle async operations (setTimeout, fetch, etc.)
- **Callback Queue (Macrotask Queue)**: Holds callbacks from Web APIs
- **Microtask Queue**: Holds promises, queueMicrotask
- **Event Loop**: Moves tasks from queues to call stack

**Execution Order**:

1. Execute all synchronous code
2. Process all microtasks
3. Process one macrotask
4. Repeat steps 2-3

### 2. Promises

**States**:

- **Pending**: Initial state
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

**Key Methods**:

```javascript
// Promise.all - waits for all promises
Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));

// Promise.race - resolves with first settled promise
Promise.race([promise1, promise2]).then((result) => console.log(result));

// Promise.allSettled - waits for all, returns all results
Promise.allSettled([promise1, promise2]).then((results) =>
  console.log(results)
);
```

### 3. Async/Await

**Benefits**:

- More readable than promise chains
- Better error handling with try/catch
- Easier debugging

```javascript
async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
```

---

## Object-Oriented Programming

### 1. Prototypes and Inheritance

**Prototype Chain**: Objects inherit properties and methods from their prototype.

```javascript
// Constructor function
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

const john = new Person("John");
console.log(john.greet()); // "Hello, I'm John"

// Inheritance
function Developer(name, language) {
  Person.call(this, name);
  this.language = language;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.code = function () {
  return `${this.name} codes in ${this.language}`;
};
```

### 2. ES6 Classes

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }

  static species() {
    return "Homo sapiens";
  }
}

class Developer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }

  code() {
    return `${this.name} codes in ${this.language}`;
  }
}
```

### 3. Composition vs Inheritance

**Composition**: "Has-a" relationship - more flexible

```javascript
const canWalk = {
  walk() {
    return `${this.name} is walking`;
  },
};

const canCode = {
  code() {
    return `${this.name} is coding`;
  },
};

function Person(name) {
  const person = { name };
  return Object.assign(person, canWalk);
}

function Developer(name) {
  const developer = { name };
  return Object.assign(developer, canWalk, canCode);
}
```

---

## Functional Programming

### 1. Pure Functions

**Characteristics**:

- Same input always produces same output
- No side effects
- Don't modify external state

```javascript
// Pure function
function add(a, b) {
  return a + b;
}

// Impure function
let total = 0;
function addToTotal(value) {
  total += value; // Side effect
  return total;
}
```

### 2. Higher-Order Functions

**Definition**: Functions that take other functions as arguments or return functions.

```javascript
// Function that takes function as argument
function map(array, fn) {
  const result = [];
  for (let item of array) {
    result.push(fn(item));
  }
  return result;
}

// Function that returns function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

### 3. Currying

**Definition**: Transforming a function with multiple arguments into a sequence of functions with single arguments.

```javascript
// Regular function
function add(a, b, c) {
  return a + b + c;
}

// Curried function
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Arrow function version
const curriedAddArrow = (a) => (b) => (c) => a + b + c;

console.log(curriedAdd(1)(2)(3)); // 6
```

---

## Advanced Patterns

### 1. Module Pattern

**Purpose**: Encapsulation and data privacy

```javascript
const Module = (function () {
  let privateVariable = 0;

  function privateFunction() {
    console.log("Private function called");
  }

  return {
    publicMethod() {
      privateVariable++;
      privateFunction();
      return privateVariable;
    },

    getPrivateVariable() {
      return privateVariable;
    },
  };
})();
```

### 2. Observer Pattern

**Purpose**: One-to-many dependency between objects

```javascript
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received: ${data}`);
  }
}
```

### 3. Singleton Pattern

**Purpose**: Ensure only one instance of a class

```javascript
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.data = [];
    Singleton.instance = this;
    return this;
  }

  addData(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true
```

---

## Performance & Optimization

### 1. Debouncing and Throttling

**Debounce**: Delay execution until after calls have stopped
**Throttle**: Limit execution to once per time period

```javascript
// Debounce
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Throttle
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
```

### 2. Memoization

**Purpose**: Cache function results to improve performance

```javascript
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const fibonacci = memoize(function (n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});
```

### 3. Lazy Loading

**Purpose**: Load resources only when needed

```javascript
class LazyLoader {
  constructor() {
    this.cache = new Map();
  }

  async load(key, loader) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const resource = await loader();
    this.cache.set(key, resource);
    return resource;
  }
}
```

---

## ES6+ Features

### 1. Destructuring

```javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, ...others } = { name: "John", age: 30, city: "NYC" };

// Function parameter destructuring
function greet({ name, age }) {
  return `Hello ${name}, you are ${age} years old`;
}
```

### 2. Spread and Rest Operators

```javascript
// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Spread in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
```

### 3. Template Literals

```javascript
const name = "John";
const age = 30;

// Basic template literal
const message = `Hello, my name is ${name} and I'm ${age} years old`;

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? `<mark>${values[i]}</mark>` : "";
    return result + string + value;
  }, "");
}

const highlighted = highlight`Hello ${name}, you are ${age} years old`;
```

### 4. Symbols

```javascript
// Creating symbols
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2); // false

// Using symbols as object keys
const obj = {
  [sym1]: "value1",
  regularKey: "value2",
};

// Well-known symbols
class MyClass {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}
```

---

## Common Interview Questions

### 1. What is the difference between `var`, `let`, and `const`?

| Feature       | var             | let         | const       |
| ------------- | --------------- | ----------- | ----------- |
| Scope         | Function        | Block       | Block       |
| Hoisting      | Yes (undefined) | Yes (TDZ)   | Yes (TDZ)   |
| Redeclaration | Allowed         | Not allowed | Not allowed |
| Reassignment  | Allowed         | Allowed     | Not allowed |

### 2. Explain the difference between `==` and `===`

- `==` (loose equality): Performs type coercion
- `===` (strict equality): No type coercion, checks type and value

```javascript
console.log(5 == "5"); // true (type coercion)
console.log(5 === "5"); // false (different types)
console.log(null == undefined); // true
console.log(null === undefined); // false
```

### 3. What is event bubbling and capturing?

- **Bubbling**: Events propagate from target to root
- **Capturing**: Events propagate from root to target

```javascript
element.addEventListener("click", handler, false); // Bubbling (default)
element.addEventListener("click", handler, true); // Capturing
```

### 4. How do you check if a property exists in an object?

```javascript
const obj = { name: "John", age: 30 };

// Different methods
console.log("name" in obj); // true
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.name !== undefined); // true
console.log(Object.hasOwn(obj, "name")); // true (ES2022)
```

### 5. What are the different ways to create objects in JavaScript?

```javascript
// 1. Object literal
const obj1 = { name: "John" };

// 2. Constructor function
function Person(name) {
  this.name = name;
}
const obj2 = new Person("John");

// 3. Object.create()
const obj3 = Object.create({ name: "John" });

// 4. ES6 Class
class Person {
  constructor(name) {
    this.name = name;
  }
}
const obj4 = new Person("John");

// 5. Factory function
function createPerson(name) {
  return { name };
}
const obj5 = createPerson("John");
```

### 6. How do you deep clone an object?

```javascript
// Method 1: JSON (limitations with functions, dates, etc.)
const clone1 = JSON.parse(JSON.stringify(obj));

// Method 2: Recursive function
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map((item) => deepClone(item));

  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

// Method 3: structuredClone (modern browsers)
const clone3 = structuredClone(obj);
```

### 7. What is the difference between arrow functions and regular functions?

```javascript
// 1. `this` binding
const obj = {
  name: "John",
  regularFunction: function () {
    console.log(this.name); // 'John'
  },
  arrowFunction: () => {
    console.log(this.name); // undefined (global context)
  },
};

// 2. Arguments object
function regularFunc() {
  console.log(arguments); // Available
}

const arrowFunc = () => {
  console.log(arguments); // ReferenceError
};

// 3. Constructor
function RegularFunc() {
  this.name = "John";
}
const instance1 = new RegularFunc(); // Works

const ArrowFunc = () => {
  this.name = "John";
};
const instance2 = new ArrowFunc(); // TypeError
```

### 8. How do you handle errors in JavaScript?

```javascript
// Try-catch for synchronous code
try {
  // Code that might throw error
  JSON.parse(invalidJSON);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("This always runs");
}

// Promise error handling
fetch("/api/data")
  .then((response) => response.json())
  .catch((error) => console.error("Fetch error:", error));

// Async/await error handling
async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
```

### 9. What are Web APIs and how do they work with JavaScript?

**Common Web APIs**:

- DOM API
- Fetch API
- Geolocation API
- Local Storage API
- Web Workers API

**How they work**:

- Provided by browser environment
- Asynchronous operations handled by event loop
- Use callbacks, promises, or events for communication

### 10. Memory Management and Garbage Collection

**Garbage Collection**:

- Mark and Sweep algorithm
- Reference counting (older method)
- Automatic memory management

**Memory Leaks**:

```javascript
// Common memory leak patterns
// 1. Global variables
var globalVar = "This stays in memory";

// 2. Forgotten timers
const timer = setInterval(() => {
  // Do something
}, 1000);
// clearInterval(timer); // Don't forget to clear!

// 3. Closures holding references
function createClosure() {
  const largeData = new Array(1000000);
  return function () {
    // largeData is still referenced
    return largeData.length;
  };
}

// 4. Detached DOM nodes
const element = document.getElementById("myElement");
document.body.removeChild(element);
// element still referenced, won't be garbage collected
```

---

## 🎯 Quick Interview Tips

### Key Points to Remember:

1. **Understand the fundamentals**: closures, hoisting, scope, `this`
2. **Know async patterns**: Promises, async/await, event loop
3. **Be familiar with ES6+ features**: destructuring, arrow functions, classes
4. **Understand performance**: debouncing, throttling, memoization
5. **Know common patterns**: module, observer, singleton
6. **Practice coding**: implement polyfills, solve algorithm problems
7. **Understand browser APIs**: DOM manipulation, fetch, storage

### Questions to Ask Interviewer:

- What JavaScript frameworks/libraries does the team use?
- How do you handle state management?
- What are the performance requirements?
- How do you approach testing JavaScript code?
- What build tools and processes do you use?

---

**Remember**: Understanding the "why" behind concepts is more important than memorizing syntax. Be prepared to explain your reasoning and provide examples!
