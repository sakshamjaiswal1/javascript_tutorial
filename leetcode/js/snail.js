Array.prototype.snail = function (rowsCount, colsCount) {
  // Check if the input array can perfectly fill the matrix
  if (rowsCount * colsCount !== this.length) return [];

  // Step 1: Create the empty result matrix
  const result = Array(rowsCount)
    .fill()
    .map(() => []);

  // Step 2: Fill values in zig-zag (snail) column-wise pattern
  for (let colIndex = 0; colIndex < colsCount; colIndex++) {
    for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
      // Step 3: Calculate the correct row to insert into
      let targetRow;
      if (colIndex % 2 === 0) {
        // Even column: top to bottom
        targetRow = rowIndex;
      } else {
        // Odd column: bottom to top
        targetRow = rowsCount - rowIndex - 1;
      }

      // Step 4: Compute the 1D index for this value
      const flatIndex = colIndex * rowsCount + rowIndex;
      const value = this[flatIndex];

      // Step 5: Push value to the right place in result matrix
      result[targetRow].push(value);
    }
  }

  return result;
};

// recursive
const flat = function (arr, n) {
  if (n <= 0 || arr.every((item) => typeof item === "number")) {
    return arr;
  }
  const newArr = [];
  for (let x of arr) {
    if (typeof x === "number") {
      newArr.push(x);
    } else {
      newArr.push(...x);
    }
  }
  return flat(newArr, n - 1);
};

const reduce = function (nums, fn, init) {
  let value = init;

  nums.forEach((element) => {
    value = fn(value, element);
  });
  return value;
};

const debounce = function (fn, t) {
  let timer;
  return function (...args) {
    clearInterval(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};

const throttle = function (fn, t) {
  let timer = 0;
  return function (...args) {
    const now = Date.now();
    if (now - timer >= t) {
      timer = now;
      fn.apply(this, args);
    }
  };
};

function incrementClosure() {
  let count = 0;

  return () => {
    return count++;
  };
}
