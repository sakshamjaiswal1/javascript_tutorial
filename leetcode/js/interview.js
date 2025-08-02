console.log("\n=== PROBLEM 2: Promise vs setTimeout ===");
// What will be the output?

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

/* 
SOLUTION 2:
Output:
Start
End
Promise
Timeout

Explanation: Promises go to microtask queue which has higher priority 
than macrotask queue (where setTimeout goes).
*/

console.log("\n=== PROBLEM 3: Multiple Promises and setTimeout ===");
// What will be the output?console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
Promise.resolve().then(() => console.log("4"));
setTimeout(() => console.log("5"), 0);
console.log("6");

/* 
SOLUTION 3:
Output:
1
6
3
4
2
5

Explanation: 
1. Synchronous code first: 1, 6
2. All microtasks (promises) next: 3, 4
3. Macrotasks (setTimeout) last: 2, 5
*/

console.log("\n=== PROBLEM 4: Nested setTimeout ===");
// What will be the output?

console.log("A");
setTimeout(() => {
  console.log("B");
  setTimeout(() => console.log("C"), 0);
}, 0);
setTimeout(() => console.log("D"), 0);
console.log("E");

/* 
SOLUTION 4:
Output:
A
E
B
D
C

Explanation: 
1. Sync code: A, E
2. First level timeouts: B, D (in order they were scheduled)
3. Nested timeout: C (scheduled after B executes)
*/

console.log("\n=== PROBLEM 5: Promise.then Chain ===");
// What will be the output?

Promise.resolve()
  .then(() => {
    console.log("1");
    return Promise.resolve("2");
  })
  .then((val) => {
    console.log(val);
    return "3";
  })
  .then((val) => console.log(val));

setTimeout(() => console.log("4"), 0);
console.log("5");

/* 
SOLUTION 5:
Output:
5
1
2
3
4

Explanation: 
1. Sync code: 5
2. Promise chain executes in microtask queue: 1, 2, 3
3. setTimeout in macrotask queue: 4
*/

console.log("\n=== PROBLEM 6: Mixed Async Operations ===");
// What will be the output?

async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
test();
console.log("4");
Promise.resolve().then(() => console.log("5"));

/* 
SOLUTION 6:
Output:
3
1
4
2
5

Explanation:
1. Sync code: 3
2. Function starts sync: 1
3. await pauses function, continues sync: 4
4. Microtasks: 2 (from await), 5 (from Promise.then)
*/

console.log("\n=== BONUS PROBLEM: Tricky Closure with setTimeout ===");
// What will be the output?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0);
}

/* 
SOLUTION BONUS:
Output:
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2

Explanation:
- var has function scope, so all timeouts reference the same variable
- let has block scope, creating new binding for each iteration
- This demonstrates closure behavior with event loop
*/

// ===== SIMPLE DEBOUNCE AND THROTTLE FUNCTIONS =====

console.log("\n\n=== DEBOUNCE FUNCTION ===");

// Simple Debounce: Delays execution until after delay time has passed since last call
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example: Search input
function search(query) {
  console.log(`Searching for: ${query}`);
}

const debouncedSearch = debounce(search, 300);

// Usage
debouncedSearch("a");
debouncedSearch("ap");
debouncedSearch("app"); // Only this will execute after 300ms

console.log("\n=== THROTTLE FUNCTION ===");

// Simple Throttle: Limits execution to once per delay period
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

// Example: Scroll handler
function handleScroll() {
  console.log("Scroll handled");
}

const throttledScroll = throttle(handleScroll, 100);

// Usage
throttledScroll(); // Executes immediately
throttledScroll(); // Ignored (within 100ms)
setTimeout(() => throttledScroll(), 150); // Will execute

/* 
KEY DIFFERENCES:
- DEBOUNCE: Wait for silence, then execute
- THROTTLE: Execute at most once per time period

WHEN TO USE:
- Debounce: Search input, button clicks, form validation
- Throttle: Scroll events, mouse movement, API calls
*/
// Deepclone
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const cloneObj = {};
  for (let key in obj) {
    cloneObj[key] = deepClone(obj[key]);
  }
}
// Deep Equal

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1?.length !== keys2?.length) {
    return false;
  }
  for (let key of keys1) {
    if (!keys2?.includes(key)) {
      return false;
    }
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

// ===== ARROW FUNCTION vs REGULAR FUNCTION OUTPUT PROBLEMS =====

console.log(
  "\n\n========== ARROW FUNCTION vs REGULAR FUNCTION DIFFERENCES =========="
);

console.log("\n=== PROBLEM 1: 'this' Binding in Objects ===");
// What will be the output?

const obj = {
  name: "John",
  regularFunction: function () {
    console.log("Regular:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow:", this.name);
  },
  nestedExample: function () {
    console.log("Outer regular:", this.name);

    const inner = () => {
      console.log("Inner arrow:", this.name);
    };

    function innerRegular() {
      console.log("Inner regular:", this.name);
    }

    inner();
    innerRegular();
  },
};

obj.regularFunction();
obj.arrowFunction();
obj.nestedExample();

/* 
SOLUTION 1:
Output:
Regular: John
Arrow: undefined
Outer regular: John
Inner arrow: John
Inner regular: undefined

Explanation:
- Regular functions bind 'this' to the calling object (obj)
- Arrow functions inherit 'this' from enclosing scope (global)
- Nested arrow function inherits 'this' from outer regular function
- Nested regular function gets global 'this' when called without context
*/

console.log("\n=== PROBLEM 2: Constructor Function Behavior ===");
// What will be the output?

function RegularConstructor(name) {
  this.name = name;
  console.log("Regular constructor called");
}

const ArrowConstructor = (name) => {
  this.name = name;
  console.log("Arrow constructor called");
};

try {
  const regular = new RegularConstructor("John");
  console.log("Regular instance:", regular.name);
} catch (error) {
  console.log("Regular error:", error.message);
}

try {
  const arrow = new ArrowConstructor("Jane");
  console.log("Arrow instance:", arrow.name);
} catch (error) {
  console.log("Arrow error:", error.message);
}

/* 
SOLUTION 2:
Output:
Regular constructor called
Regular instance: John
Arrow error: ArrowConstructor is not a constructor

Explanation:
- Regular functions can be used as constructors with 'new'
- Arrow functions cannot be used as constructors
- Arrow functions don't have their own 'this' to bind to new instance
*/

console.log("\n=== PROBLEM 3: Arguments Object ===");
// What will be the output?

function regularWithArgs() {
  console.log("Regular arguments:", arguments.length);
  console.log("Regular args[0]:", arguments[0]);
}

const arrowWithArgs = () => {
  try {
    console.log("Arrow arguments:", arguments.length);
  } catch (error) {
    console.log("Arrow error:", error.message);
  }
};

const arrowWithRest = (...args) => {
  console.log("Arrow with rest:", args.length);
  console.log("Arrow rest[0]:", args[0]);
};

regularWithArgs("hello", "world");
arrowWithArgs("hello", "world");
arrowWithRest("hello", "world");

/* 
SOLUTION 3:
Output:
Regular arguments: 2
Regular args[0]: hello
Arrow error: arguments is not defined
Arrow with rest: 2
Arrow rest[0]: hello

Explanation:
- Regular functions have access to 'arguments' object
- Arrow functions don't have 'arguments' object
- Use rest parameters (...args) in arrow functions instead
*/

console.log("\n=== PROBLEM 4: Method Call vs Direct Call ===");
// What will be the output?

const person = {
  name: "Alice",
  greetRegular: function () {
    return `Hello, I'm ${this.name}`;
  },
  greetArrow: () => {
    return `Hello, I'm ${this.name}`;
  },
};

console.log(person.greetRegular());
console.log(person.greetArrow());

const regularMethod = person.greetRegular;
const arrowMethod = person.greetArrow;

console.log(regularMethod());
console.log(arrowMethod());

/* 
SOLUTION 4:
Output:
Hello, I'm Alice
Hello, I'm undefined
Hello, I'm undefined
Hello, I'm undefined

Explanation:
- Regular method works when called on object
- Arrow method doesn't bind to object, uses global 'this'
- When assigned to variable, regular function loses 'this' context
- Arrow function behavior remains same (global 'this')
*/

console.log("\n=== PROBLEM 5: Call, Apply, Bind with Functions ===");
// What will be the output?

const context = { name: "Bob" };

function regularFunc() {
  return `Regular: ${this.name}`;
}

const arrowFunc = () => {
  return `Arrow: ${this.name}`;
};

console.log(regularFunc.call(context));
console.log(arrowFunc.call(context));

console.log(regularFunc.apply(context));
console.log(arrowFunc.apply(context));

const boundRegular = regularFunc.bind(context);
const boundArrow = arrowFunc.bind(context);

console.log(boundRegular());
console.log(boundArrow());

/* 
SOLUTION 5:
Output:
Regular: Bob
Arrow: undefined
Regular: Bob
Arrow: undefined
Regular: Bob
Arrow: undefined

Explanation:
- call(), apply(), bind() can change 'this' for regular functions
- Arrow functions ignore explicit 'this' binding
- Arrow functions always use lexical 'this' from creation time
*/

console.log("\n=== PROBLEM 6: Hoisting Behavior ===");
// What will be the output?

console.log("Before declarations:");

try {
  console.log("Regular function:", regularHoisted());
} catch (error) {
  console.log("Regular error:", error.message);
}

try {
  console.log("Arrow function:", arrowHoisted());
} catch (error) {
  console.log("Arrow error:", error.message);
}

function regularHoisted() {
  return "I am hoisted!";
}

const arrowHoisted = () => {
  return "I am not hoisted!";
};

console.log("After declarations:");
console.log("Regular function:", regularHoisted());
console.log("Arrow function:", arrowHoisted());

/* 
SOLUTION 6:
Output:
Before declarations:
Regular function: I am hoisted!
Arrow error: Cannot access 'arrowHoisted' before initialization
After declarations:
Regular function: I am hoisted!
Arrow function: I am not hoisted!

Explanation:
- Function declarations are fully hoisted (available before declaration)
- Arrow functions assigned to variables follow variable hoisting rules
- const/let variables are in temporal dead zone before declaration
*/

console.log("\n=== PROBLEM 7: Callback Context ===");
// What will be the output?

const timer = {
  seconds: 0,

  startRegular: function () {
    console.log("Starting regular timer...");
    setTimeout(function () {
      this.seconds++;
      console.log("Regular callback seconds:", this.seconds);
    }, 10);
  },

  startArrow: function () {
    console.log("Starting arrow timer...");
    setTimeout(() => {
      this.seconds++;
      console.log("Arrow callback seconds:", this.seconds);
    }, 15);
  },
};

timer.startRegular();
timer.startArrow();

// Wait for timers to execute
setTimeout(() => {
  console.log("Final timer.seconds:", timer.seconds);
}, 50);

/* 
SOLUTION 7:
Output:
Starting regular timer...
Starting arrow timer...
Regular callback seconds: NaN
Arrow callback seconds: 1
Final timer.seconds: 1

Explanation:
- Regular function callback loses 'this' context (becomes global)
- Arrow function callback preserves 'this' from enclosing method
- this.seconds++ on global object results in NaN (undefined + 1)
- Arrow function correctly increments timer.seconds
*/

console.log("\n=== PROBLEM 8: Array Methods and Context ===");
// What will be the output?

const calculator = {
  numbers: [1, 2, 3, 4, 5],
  multiplier: 2,

  processWithRegular: function () {
    return this.numbers.map(function (num) {
      return num * this.multiplier; // 'this' is undefined/global
    });
  },

  processWithArrow: function () {
    return this.numbers.map((num) => {
      return num * this.multiplier; // 'this' is calculator object
    });
  },

  processWithBind: function () {
    return this.numbers.map(
      function (num) {
        return num * this.multiplier;
      }.bind(this)
    ); // Explicitly bind 'this'
  },
};

console.log("Regular function map:", calculator.processWithRegular());
console.log("Arrow function map:", calculator.processWithArrow());
console.log("Bound function map:", calculator.processWithBind());

/* 
SOLUTION 8:
Output:
Regular function map: [NaN, NaN, NaN, NaN, NaN]
Arrow function map: [2, 4, 6, 8, 10]
Bound function map: [2, 4, 6, 8, 10]

Explanation:
- Regular function in map loses 'this' context
- Arrow function preserves 'this' from enclosing method
- .bind(this) explicitly sets 'this' for regular function
- NaN results from undefined * number
*/

console.log("\n=== PROBLEM 9: Event Handler Simulation ===");
// What will be the output?

const button = {
  text: "Click me!",

  handleClickRegular: function () {
    console.log("Regular handler - button text:", this.text);
  },

  handleClickArrow: () => {
    console.log("Arrow handler - button text:", this.text);
  },

  setupHandlers: function () {
    // Simulate event handler calls
    console.log("Setting up handlers...");

    // Direct method call
    this.handleClickRegular();
    this.handleClickArrow();

    // Simulate event system calling handlers
    const regularHandler = this.handleClickRegular;
    const arrowHandler = this.handleClickArrow;

    console.log("Simulating event calls:");
    regularHandler(); // Called without context
    arrowHandler(); // Called without context
  },
};

button.setupHandlers();

/* 
SOLUTION 9:
Output:
Setting up handlers...
Regular handler - button text: Click me!
Arrow handler - button text: undefined
Simulating event calls:
Regular handler - button text: undefined
Arrow handler - button text: undefined

Explanation:
- Regular method works when called on object
- Arrow method doesn't bind to object
- When event system calls handlers, regular function loses context
- Arrow function behavior remains unchanged (global 'this')
- In real DOM events, you'd need .bind(this) for regular functions
*/

console.log("\n=== PROBLEM 10: Class Methods and Arrow Functions ===");
// What will be the output?

class MyClass {
  constructor(name) {
    this.name = name;

    // Arrow function as property
    this.arrowMethod = () => {
      return `Arrow in class: ${this.name}`;
    };
  }

  // Regular method
  regularMethod() {
    return `Regular in class: ${this.name}`;
  }

  testMethods() {
    console.log(this.regularMethod());
    console.log(this.arrowMethod());

    // Extract methods
    const { regularMethod, arrowMethod } = this;

    console.log("Extracted methods:");
    try {
      console.log(regularMethod());
    } catch (error) {
      console.log("Regular extracted error:", error.message);
    }

    console.log(arrowMethod());
  }
}

const instance = new MyClass("TestInstance");
instance.testMethods();

/* 
SOLUTION 10:
Output:
Regular in class: TestInstance
Arrow in class: TestInstance
Extracted methods:
Regular extracted error: Cannot read properties of undefined (reading 'name')
Arrow in class: TestInstance

Explanation:
- Regular class methods lose 'this' when extracted
- Arrow functions defined in constructor bind to instance
- Arrow properties are created per instance (not on prototype)
- Regular methods are on prototype and need proper 'this' binding
- Arrow functions in classes are useful for event handlers
*/

console.log("\n========== KEY TAKEAWAYS ==========");
console.log(`
REGULAR FUNCTIONS:
✓ Have their own 'this' binding
✓ Can be used as constructors
✓ Have 'arguments' object
✓ Are fully hoisted
✓ Can be rebound with call/apply/bind
✓ Lose context when extracted as callbacks

ARROW FUNCTIONS:
✓ Inherit 'this' from enclosing scope
✓ Cannot be used as constructors
✓ No 'arguments' object (use rest parameters)
✓ Follow variable hoisting rules
✓ Cannot be rebound with call/apply/bind
✓ Maintain context when used as callbacks

WHEN TO USE EACH:
- Regular: Methods, constructors, when you need dynamic 'this'
- Arrow: Callbacks, array methods, when you want lexical 'this'
`);
