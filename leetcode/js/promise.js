// ===== PROMISE CONCEPTS AND INTERVIEW QUESTIONS =====

console.log("========== PROMISE FUNDAMENTALS ==========");

// 1. PROMISE STATES
console.log("\n=== 1. Promise States ===");
/*
Promise has 3 states:
- PENDING: Initial state, neither fulfilled nor rejected
- FULFILLED: Operation completed successfully
- REJECTED: Operation failed

Once a promise is settled (fulfilled or rejected), it cannot change state.
*/

// 2. CREATING PROMISES
console.log("\n=== 2. Creating Promises ===");

// Basic Promise Constructor
const basicPromise = new Promise((resolve, reject) => {
  // Async operation
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  }, 100);
});

// Promise.resolve() - Creates resolved promise
const resolvedPromise = Promise.resolve("Immediate success");

// Promise.reject() - Creates rejected promise
const rejectedPromise = Promise.reject("Immediate failure");

// 3. PROMISE METHODS
console.log("\n=== 3. Promise Methods ===");

// .then() - Handle success
// .catch() - Handle errors
// .finally() - Always execute
// .then() can take two callbacks: onFulfilled, onRejected

// 4. PROMISE CHAINING
console.log("\n=== 4. Promise Chaining ===");
/*
- .then() returns a new promise
- Each .then() can return a value or another promise
- Errors bubble up through the chain
- .catch() can handle errors from anywhere in the chain
*/

// 5. PROMISE STATIC METHODS
console.log("\n=== 5. Promise Static Methods ===");
/*
- Promise.all(): Wait for all promises to resolve
- Promise.race(): Resolve/reject when first promise settles
- Promise.allSettled(): Wait for all promises to settle (resolve or reject)
- Promise.any(): Resolve when first promise fulfills
*/

// ===== DETAILED THEORY EXPLANATIONS ==========

console.log("\n\n========== COMPREHENSIVE PROMISE THEORY ==========");

console.log("\n=== 1. WHAT ARE PROMISES? ===");
/*
PROMISES are objects representing the eventual completion (or failure) of an asynchronous operation.

Key Characteristics:
✓ They are containers for future values
✓ They have three states: Pending, Fulfilled, Rejected
✓ Once settled, they cannot change state
✓ They provide a way to handle async operations synchronously
✓ They eliminate callback hell and make async code more readable

Why Promises?
- Before: Callback hell, hard to handle errors, difficult to chain
- After: Clean chaining, centralized error handling, better readability
*/

console.log("\n=== 2. PROMISE LIFE CYCLE ===");
/*
1. CREATION: Promise is created in PENDING state
2. EXECUTION: Executor function runs (synchronously)
3. SETTLEMENT: Promise becomes FULFILLED or REJECTED
4. CONSUMPTION: .then()/.catch() handlers are called (asynchronously)

Example Life Cycle:
*/
const lifeCycleExample = new Promise((resolve, reject) => {
  console.log("1. Executor runs (synchronous)");
  setTimeout(() => {
    console.log("2. Async operation completes");
    resolve("Success!");
  }, 100);
});

lifeCycleExample.then((result) => {
  console.log("3. Handler called (asynchronous):", result);
});

console.log("\n=== 3. PROMISE EXECUTOR FUNCTION ===");
/*
The executor function is the function passed to the Promise constructor.
It runs SYNCHRONOUSLY and has two parameters: resolve and reject.

Key Points:
✓ Executor runs immediately when promise is created
✓ resolve() and reject() can only be called once
✓ Subsequent calls are ignored
✓ Executor cannot be cancelled once started
*/

// Example: Executor behavior
const executorExample = new Promise((resolve, reject) => {
  console.log("Executor starts");
  resolve("First resolve");
  resolve("Second resolve - ignored");
  reject("Reject - ignored");
});

console.log("\n=== 4. PROMISE CHAINING MECHANICS ===");
/*
Promise chaining works because .then() and .catch() return new promises.

Chain Rules:
1. Each .then() returns a new promise
2. Return values become the fulfillment value of the new promise
3. Thrown errors become the rejection reason of the new promise
4. If no return value, undefined is passed to next .then()
5. If .then() returns a promise, it's "unwrapped" before passing to next .then()

Example Chain Flow:
*/
Promise.resolve(1)
  .then((x) => {
    console.log("Step 1:", x); // 1
    return x + 1; // Returns 2
  })
  .then((x) => {
    console.log("Step 2:", x); // 2
    return Promise.resolve(x * 2); // Returns promise that resolves to 4
  })
  .then((x) => {
    console.log("Step 3:", x); // 4 (promise was unwrapped)
  });

console.log("\n=== 5. ERROR HANDLING IN PROMISES ===");
/*
Error handling in promises follows the "catch-all" pattern.

Error Flow:
1. Errors thrown in .then() become rejections
2. Errors bubble up through the chain
3. .catch() catches errors from anywhere in the chain
4. After .catch(), chain continues with resolved promise
5. .finally() always executes regardless of success/failure

Error Handling Patterns:
*/

// Pattern 1: Catch at the end
Promise.resolve("Start")
  .then(() => {
    throw new Error("Error 1");
  })
  .then(() => console.log("This won't run"))
  .catch((error) => console.log("Caught:", error.message));

// Pattern 2: Catch and continue
Promise.resolve("Start")
  .then(() => {
    throw new Error("Error 2");
  })
  .catch((error) => {
    console.log("Handled:", error.message);
    return "Recovered"; // Chain continues with this value
  })
  .then((result) => console.log("After recovery:", result));

console.log("\n=== 6. PROMISE STATIC METHODS COMPARISON ===");
/*
Promise.all() vs Promise.race() vs Promise.allSettled() vs Promise.any()

Promise.all():
- Waits for ALL promises to resolve
- Fails fast if ANY promise rejects
- Returns array of results in order
- Use case: Need all operations to succeed

Promise.race():
- Resolves/rejects when FIRST promise settles
- Doesn't wait for others
- Returns single result
- Use case: Timeout patterns, fastest wins

Promise.allSettled():
- Waits for ALL promises to settle (resolve OR reject)
- Never fails
- Returns array of result objects with status
- Use case: Need results regardless of success/failure

Promise.any():
- Resolves when FIRST promise fulfills
- Rejects only if ALL promises reject
- Returns single result
- Use case: Multiple fallback options
*/

console.log("\n=== 7. ASYNC/AWAIT SYNTAX ===");
/*
Async/await is syntactic sugar over promises.

Key Points:
✓ async function always returns a promise
✓ await pauses execution until promise settles
✓ await can only be used inside async functions
✓ try/catch works naturally with async/await
✓ await unwraps promise values automatically

Comparison:
*/

// Promise style
function promiseStyle() {
  return fetch("/api/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// Async/await style
async function asyncStyle() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

console.log("\n=== 8. PROMISE MICROTASK QUEUE ===");
/*
Promises use the microtask queue, not the macrotask queue.

Execution Order:
1. Synchronous code
2. Microtasks (promises, queueMicrotask)
3. Macrotasks (setTimeout, setInterval, I/O)

Example:
*/
console.log("1. Sync start");
setTimeout(() => console.log("4. Macrotask"), 0);
Promise.resolve().then(() => console.log("2. Microtask"));
queueMicrotask(() => console.log("3. Microtask"));
console.log("5. Sync end");

console.log("\n=== 9. COMMON PROMISE PATTERNS ===");
/*
1. TIMEOUT PATTERN:
   Use Promise.race() to add timeout to any promise
*/
function withTimeout(promise, timeout) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout)
    ),
  ]);
}

/*
2. RETRY PATTERN:
   Retry failed operations with exponential backoff
*/
async function retry(fn, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxAttempts) throw error;
      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
    }
  }
}

/*
3. CANCELLATION PATTERN:
   Custom implementation for cancelling promises
*/
function cancellablePromise(executor) {
  let cancelled = false;
  let rejectFn;

  const promise = new Promise((resolve, reject) => {
    rejectFn = reject;
    executor(
      (value) => !cancelled && resolve(value),
      (reason) => !cancelled && reject(reason)
    );
  });

  promise.cancel = () => {
    cancelled = true;
    rejectFn(new Error("Cancelled"));
  };

  return promise;
}

console.log("\n=== 10. PROMISE BEST PRACTICES ===");
/*
✓ Always handle promise rejections
✓ Use .catch() or try/catch with async/await
✓ Don't create promises unnecessarily (Promise.resolve() for values)
✓ Use Promise.all() for parallel operations
✓ Use Promise.race() for timeouts
✓ Chain promises instead of nesting
✓ Return promises from async functions
✓ Use .finally() for cleanup
✓ Avoid mixing callbacks and promises
✓ Use async/await for better readability
*/

console.log("\n=== 11. PROMISE ANTI-PATTERNS ===");
/*
❌ Don't forget to handle rejections
❌ Don't create promises for synchronous operations
❌ Don't nest promises (use chaining instead)
❌ Don't mix callbacks and promises unnecessarily
❌ Don't ignore promise rejections
❌ Don't use new Promise() when Promise.resolve() suffices
❌ Don't forget to return promises from async functions
❌ Don't use .then() when async/await would be clearer
*/

console.log("\n=== 12. PROMISE PERFORMANCE CONSIDERATIONS ===");
/*
✓ Promise creation has minimal overhead
✓ Microtasks execute before next render
✓ Promise.all() is more efficient than sequential .then()
✓ Avoid creating unnecessary promises
✓ Use Promise.allSettled() when you need all results
✓ Consider concurrency limits for large operations
✓ Memory usage: Promises hold references until settled
✓ Garbage collection: Settled promises can be garbage collected
*/

console.log("\n=== 13. PROMISE DEBUGGING TECHNIQUES ===");
/*
1. Add logging to track promise flow:
*/
Promise.resolve("Start")
  .then((result) => {
    console.log("Step 1:", result);
    return result + " -> Step 2";
  })
  .then((result) => {
    console.log("Step 2:", result);
    return result + " -> Step 3";
  })
  .then((result) => {
    console.log("Final:", result);
  });

/*
2. Use .finally() for debugging:
*/
Promise.resolve("Data")
  .finally(() => console.log("Promise completed"))
  .then((result) => console.log("Result:", result));

/*
3. Handle unhandled rejections:
*/
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
});

console.log("\n=== 14. PROMISE TESTING STRATEGIES ===");
/*
1. Test promise resolution:
*/
function testPromiseResolution() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 100);
  });
}

/*
2. Test promise rejection:
*/
function testPromiseRejection() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Failure")), 100);
  });
}

/*
3. Mock promises in tests:
*/
const mockPromise = Promise.resolve("Mock data");

/*
4. Test async functions:
*/
async function testAsyncFunction() {
  const result = await Promise.resolve("Test result");
  return result;
}

console.log("\n=== 15. ADVANCED PROMISE CONCEPTS ===");
/*
1. Promise Composition:
   Combining multiple promise patterns
*/
async function complexOperation() {
  const [result1, result2] = await Promise.all([
    fetch("/api/data1"),
    fetch("/api/data2"),
  ]);

  const processed = await Promise.allSettled([
    processData(result1),
    processData(result2),
  ]);

  return processed.filter((p) => p.status === "fulfilled");
}

/*
2. Promise Memoization:
   Caching promise results
*/
function memoizedPromise(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const promise = fn.apply(this, args);
    cache.set(key, promise);
    return promise;
  };
}

/*
3. Promise Pool:
   Limiting concurrent operations
*/
class PromisePool {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  async add(task) {
    if (this.running >= this.concurrency) {
      await new Promise((resolve) => this.queue.push(resolve));
    }

    this.running++;
    try {
      return await task();
    } finally {
      this.running--;
      if (this.queue.length > 0) {
        this.queue.shift()();
      }
    }
  }
}

console.log("\n=== 16. PROMISE INTERVIEW TIPS ===");
/*
Key Points to Remember:
✓ Understand the event loop and microtask queue
✓ Know the difference between Promise.all() and Promise.race()
✓ Be able to implement basic promise methods
✓ Understand error handling patterns
✓ Know when to use async/await vs .then()
✓ Understand promise chaining mechanics
✓ Be familiar with common promise patterns
✓ Know how to handle promise rejections
✓ Understand promise performance implications
✓ Be able to debug promise issues
*/

// ===== OUTPUT QUESTIONS =====

console.log("\n\n========== OUTPUT QUESTIONS ==========");

console.log("\n=== QUESTION 1: Basic Promise Execution ===");
// What will be the output?

console.log("Start");

const promise1 = new Promise((resolve) => {
  console.log("Promise 1");
  resolve("Resolved 1");
});

promise1.then((result) => {
  console.log(result);
});

console.log("End");

/* 
SOLUTION 1:
Output:
Start
Promise 1
End
Resolved 1

Explanation:
- Synchronous code executes first
- Promise executor runs synchronously
- .then() callback goes to microtask queue
- Microtasks execute after current execution context
*/

console.log("\n=== QUESTION 2: Promise Chaining ===");
// What will be the output?

Promise.resolve("First")
  .then((result) => {
    console.log(result);
    return "Second";
  })
  .then((result) => {
    console.log(result);
    return Promise.resolve("Third");
  })
  .then((result) => {
    console.log(result);
  });

/* 
SOLUTION 2:
Output:
First
Second
Third

Explanation:
- Each .then() returns a new promise
- Values are passed through the chain
- Promise.resolve() creates a resolved promise
*/

console.log("\n=== QUESTION 3: Error Handling ===");
// What will be the output?

Promise.resolve("Success")
  .then((result) => {
    console.log(result);
    throw new Error("Something went wrong");
  })
  .then((result) => {
    console.log("This won't execute");
  })
  .catch((error) => {
    console.log("Caught:", error.message);
  })
  .finally(() => {
    console.log("Finally block");
  });

/* 
SOLUTION 3:
Output:
Success
Caught: Something went wrong
Finally block

Explanation:
- Errors bubble up through the chain
- .catch() catches errors from any previous .then()
- .finally() always executes regardless of success/failure
*/

console.log("\n=== QUESTION 4: Promise.all() ===");
// What will be the output?

const promiseA = Promise.resolve("A");
const promiseB = new Promise((resolve) => {
  setTimeout(() => resolve("B"), 100);
});
const promiseC = Promise.resolve("C");

Promise.all([promiseA, promiseB, promiseC])
  .then((results) => {
    console.log("All resolved:", results);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

/* 
SOLUTION 4:
Output:
All resolved: ['A', 'B', 'C']

Explanation:
- Promise.all() waits for all promises to resolve
- Results array maintains order of input promises
- If any promise rejects, entire Promise.all() rejects
*/

console.log("\n=== QUESTION 5: Promise.race() ===");
// What will be the output?

const fastPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Fast"), 50);
});

const slowPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Slow"), 200);
});

Promise.race([fastPromise, slowPromise]).then((result) => {
  console.log("Winner:", result);
});

/* 
SOLUTION 5:
Output:
Winner: Fast

Explanation:
- Promise.race() resolves/rejects when first promise settles
- Fast promise (50ms) wins over slow promise (200ms)
*/

console.log("\n=== QUESTION 6: Promise.allSettled() ===");
// What will be the output?

const successPromise = Promise.resolve("Success");
const failurePromise = Promise.reject("Failure");

Promise.allSettled([successPromise, failurePromise]).then((results) => {
  console.log("All settled:", results);
});

/* 
SOLUTION 6:
Output:
All settled: [
  { status: 'fulfilled', value: 'Success' },
  { status: 'rejected', reason: 'Failure' }
]

Explanation:
- Promise.allSettled() waits for all promises to settle
- Returns array of objects with status and value/reason
- Doesn't fail if some promises reject
*/

console.log("\n=== QUESTION 7: Async/Await vs Promises ===");
// What will be the output?

async function asyncFunction() {
  console.log("Async start");
  const result = await Promise.resolve("Async result");
  console.log(result);
  return "Async return";
}

console.log("Before async");
asyncFunction().then((result) => {
  console.log("Async completed:", result);
});
console.log("After async");

/* 
SOLUTION 7:
Output:
Before async
Async start
After async
Async result
Async completed: Async return

Explanation:
- async function returns a promise
- await pauses execution until promise resolves
- Rest of function continues in microtask queue
*/

console.log("\n=== QUESTION 8: Error in Async/Await ===");
// What will be the output?

async function errorFunction() {
  try {
    console.log("Try block");
    throw new Error("Async error");
  } catch (error) {
    console.log("Caught:", error.message);
    return "Recovered";
  }
}

errorFunction().then((result) => {
  console.log("Result:", result);
});

/* 
SOLUTION 8:
Output:
Try block
Caught: Async error
Result: Recovered

Explanation:
- try/catch works with async/await
- Thrown errors are caught by nearest catch block
- Function returns resolved promise with return value
*/

console.log("\n=== QUESTION 9: Promise Rejection Handling ===");
// What will be the output?

const unhandledPromise = new Promise((resolve, reject) => {
  reject("Unhandled rejection");
});

// No .catch() attached
console.log("Promise created");

setTimeout(() => {
  console.log("Timeout executed");
}, 0);

/* 
SOLUTION 9:
Output:
Promise created
Timeout executed
(UnhandledPromiseRejectionWarning in Node.js)

Explanation:
- Promise rejection without .catch() creates unhandled rejection
- In browsers, this might show in console
- In Node.js, this triggers a warning
*/

console.log("\n=== QUESTION 10: Complex Promise Chain ===");
// What will be the output?

Promise.resolve(1)
  .then((x) => {
    console.log("Step 1:", x);
    return x + 1;
  })
  .then((x) => {
    console.log("Step 2:", x);
    return new Promise((resolve) => {
      setTimeout(() => resolve(x * 2), 50);
    });
  })
  .then((x) => {
    console.log("Step 3:", x);
    if (x > 3) {
      throw new Error("Too big!");
    }
    return x + 1;
  })
  .catch((error) => {
    console.log("Error caught:", error.message);
    return 0;
  })
  .then((x) => {
    console.log("Final step:", x);
  });

/* 
SOLUTION 10:
Output:
Step 1: 1
Step 2: 2
Step 3: 4
Error caught: Too big!
Final step: 0

Explanation:
- Chain processes: 1 → 2 → 4 (after async) → error → 0
- Async promise in chain delays execution
- Error is caught and chain continues with 0
*/

// ===== CODING PROBLEMS =====

console.log("\n\n========== CODING PROBLEMS ==========");

console.log("\n=== PROBLEM 1: Implement Promise.all() ===");

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// Test the implementation
const testPromises = [
  Promise.resolve("A"),
  new Promise((resolve) => setTimeout(() => resolve("B"), 100)),
  Promise.resolve("C"),
];

promiseAll(testPromises)
  .then((results) => console.log("Custom Promise.all result:", results))
  .catch((error) => console.log("Error:", error));

console.log("\n=== PROBLEM 2: Implement Promise.race() ===");

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

// Test the implementation
const racePromises = [
  new Promise((resolve) => setTimeout(() => resolve("Fast"), 50)),
  new Promise((resolve) => setTimeout(() => resolve("Slow"), 200)),
];

promiseRace(racePromises)
  .then((result) => console.log("Custom Promise.race result:", result))
  .catch((error) => console.log("Error:", error));

console.log("\n=== PROBLEM 3: Implement Retry Mechanism ===");

function retry(fn, maxAttempts = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    function attempt() {
      attempts++;
      console.log(`Attempt ${attempts}/${maxAttempts}`);

      fn()
        .then(resolve)
        .catch((error) => {
          if (attempts >= maxAttempts) {
            reject(
              new Error(
                `Failed after ${maxAttempts} attempts: ${error.message}`
              )
            );
          } else {
            setTimeout(attempt, delay);
          }
        });
    }

    attempt();
  });
}

// Test retry mechanism
const failingFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.7) {
      resolve("Success!");
    } else {
      reject(new Error("Random failure"));
    }
  });
};

retry(failingFunction, 3, 500)
  .then((result) => console.log("Retry succeeded:", result))
  .catch((error) => console.log("Retry failed:", error.message));

console.log("\n=== PROBLEM 4: Implement Promise Timeout ===");

function promiseWithTimeout(promise, timeout) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout)
    ),
  ]);
}

// Test timeout
const timeoutTestPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Slow result"), 2000)
);

promiseWithTimeout(timeoutTestPromise, 1000)
  .then((result) => console.log("Promise with timeout result:", result))
  .catch((error) => console.log("Promise with timeout error:", error.message));

console.log("\n=== PROBLEM 5: Implement Promise Queue ===");

class PromiseQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        task,
        resolve,
        reject,
      });

      if (!this.running) {
        this.process();
      }
    });
  }

  async process() {
    this.running = true;

    while (this.queue.length > 0) {
      const { task, resolve, reject } = this.queue.shift();

      try {
        const result = await task();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }

    this.running = false;
  }
}

// Test promise queue
const queue = new PromiseQueue();

const tasks = [
  () => new Promise((resolve) => setTimeout(() => resolve("Task 1"), 100)),
  () => new Promise((resolve) => setTimeout(() => resolve("Task 2"), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve("Task 3"), 200)),
];

tasks.forEach((task, index) => {
  queue.add(task).then((result) => {
    console.log(`Queue task ${index + 1}:`, result);
  });
});

console.log("\n=== PROBLEM 6: Implement Promise.allSettled() ===");

function promiseAllSettled(promises) {
  return Promise.all(
    promises.map((promise) =>
      Promise.resolve(promise)
        .then((value) => ({ status: "fulfilled", value }))
        .catch((reason) => ({ status: "rejected", reason }))
    )
  );
}

// Test implementation
const mixedPromises = [
  Promise.resolve("Success"),
  Promise.reject("Failure"),
  new Promise((resolve) => setTimeout(() => resolve("Delayed"), 100)),
];

promiseAllSettled(mixedPromises).then((results) =>
  console.log("Custom Promise.allSettled:", results)
);

console.log("\n=== PROBLEM 7: Implement Promise.any() ===");

function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let completed = 0;

    if (promises.length === 0) {
      reject(new Error("No promises provided"));
      return;
    }

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          errors.push(error);
          completed++;

          if (completed === promises.length) {
            reject(new Error("All promises rejected"));
          }
        });
    });
  });
}

// Test implementation
const anyPromises = [
  Promise.reject("Error 1"),
  new Promise((resolve) => setTimeout(() => resolve("Success"), 100)),
  Promise.reject("Error 2"),
];

promiseAny(anyPromises)
  .then((result) => console.log("Custom Promise.any result:", result))
  .catch((error) => console.log("Custom Promise.any error:", error.message));

console.log("\n=== PROBLEM 8: Implement Promise.finally() Polyfill ===");

Promise.prototype.finallyPolyfill = function (onFinally) {
  return this.then(
    (value) => Promise.resolve(onFinally()).then(() => value),
    (reason) =>
      Promise.resolve(onFinally()).then(() => {
        throw reason;
      })
  );
};

// Test polyfill
Promise.resolve("Success")
  .finallyPolyfill(() => console.log("Finally polyfill executed"))
  .then((result) => console.log("Result after finally:", result));

console.log(
  "\n=== PROBLEM 9: Implement Promise.map() (Concurrent Limiting) ==="
);

function promiseMap(items, mapper, concurrency = 1) {
  return new Promise((resolve, reject) => {
    const results = [];
    let index = 0;
    let running = 0;
    let completed = 0;

    function runNext() {
      if (index >= items.length) {
        if (completed === items.length) {
          resolve(results);
        }
        return;
      }

      const currentIndex = index++;
      running++;

      Promise.resolve(mapper(items[currentIndex], currentIndex))
        .then((result) => {
          results[currentIndex] = result;
          completed++;
          running--;
          runNext();
        })
        .catch(reject);

      if (running < concurrency) {
        runNext();
      }
    }

    for (let i = 0; i < concurrency && i < items.length; i++) {
      runNext();
    }
  });
}

// Test promise map
const items = [1, 2, 3, 4, 5];
const mapper = (item) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(item * 2), Math.random() * 1000)
  );

promiseMap(items, mapper, 2).then((results) =>
  console.log("Promise.map results:", results)
);

console.log("\n=== PROBLEM 10: Implement Promise.cancel() Pattern ===");

function cancellablePromise(executor) {
  let cancelled = false;
  let rejectFn;

  const promise = new Promise((resolve, reject) => {
    rejectFn = reject;

    executor(
      (value) => {
        if (!cancelled) resolve(value);
      },
      (reason) => {
        if (!cancelled) reject(reason);
      }
    );
  });

  promise.cancel = () => {
    cancelled = true;
    rejectFn(new Error("Promise cancelled"));
  };

  return promise;
}

// Test cancellable promise
const cancellable = cancellablePromise((resolve, reject) => {
  const timeout = setTimeout(() => resolve("Completed"), 2000);

  // Cleanup function
  return () => clearTimeout(timeout);
});

setTimeout(() => {
  console.log("Cancelling promise...");
  cancellable.cancel();
}, 1000);

cancellable
  .then((result) => console.log("Cancellable result:", result))
  .catch((error) => console.log("Cancellable error:", error.message));

console.log("\n========== KEY PROMISE CONCEPTS SUMMARY ==========");
console.log(`
PROMISE FUNDAMENTALS:
✓ Three states: Pending, Fulfilled, Rejected
✓ Once settled, cannot change state
✓ Executor runs synchronously
✓ .then()/.catch() callbacks are microtasks

IMPORTANT METHODS:
✓ .then() - Handle success, returns new promise
✓ .catch() - Handle errors, can catch from anywhere in chain
✓ .finally() - Always executes, doesn't affect chain value

STATIC METHODS:
✓ Promise.all() - Wait for all to resolve, fails if any reject
✓ Promise.race() - Resolve/reject when first settles
✓ Promise.allSettled() - Wait for all to settle, never fails
✓ Promise.any() - Resolve when first fulfills, reject if all reject

ASYNC/AWAIT:
✓ Syntactic sugar over promises
✓ try/catch works naturally
✓ await pauses execution until promise settles
✓ async functions always return promises

COMMON PATTERNS:
✓ Promise chaining for sequential operations
✓ Promise.all() for parallel operations
✓ Error handling with .catch() or try/catch
✓ Timeout patterns with Promise.race()
✓ Retry mechanisms with loops
✓ Cancellation patterns (custom implementation)
`);
