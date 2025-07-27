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

// Remove duplicates from the string
function removeDuplicates(str) {
  let seen = {};
  let result = "";

  for (let i = 0; i < str?.length; i++) {
    const elem = str[i];
    if (!seen[elem]) {
      seen[elem] = true;
      result += elem;
    }
  }
  return result;
}

// First non-repeating character — who stands alone?

function firstNonRepeatingElement(str) {
  const count = {};
  for (let i = 0; i < str?.length; i++) {
    const currElem = str[i];
    count[currElem] = (count[currElem] || 0) + 1;
  }
  for (let i = 0; i < str?.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}

// Flip the words in a sentence, not the letters.

function reverseWords(sentence) {
  let words = [];
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char === " ") {
      if (word.length > 0) {
        words.push(word);
        word = "";
      }
    } else {
      word += char;
    }
  }
  if (word?.length > 0) {
    words.push(word);
  }

  return words.reverse().join(" ");
}

// 7. Are two strings anagrams? Prove it.

function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join();
}

// 8. Longest substring without repeats — sliding window style.
function lengthOfLongestSubstring(s) {
  let start = 0;
  let maxLen = 0;
  const seen = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }
    seen.set(char, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

// 9. Build your own atoi — string to integer.

function myAtoi(s) {
  let i = 0;
  const n = s.length;
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  // 1. Skip leading whitespaces
  while (i < n && s[i] === " ") {
    i++;
  }

  // 2. Check for sign
  let sign = 1;
  if (i < n && (s[i] === "+" || s[i] === "-")) {
    if (s[i] === "-") sign = -1;
    i++;
  }

  // 3. Parse digits
  let result = 0;
  while (i < n && s[i] >= "0" && s[i] <= "9") {
    const digit = s.charCodeAt(i) - "0".charCodeAt(0);

    // 4. Handle overflow
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  return result * sign;
}

// 10. Compress strings with run-length encoding.
function runLengthEncode(s) {
  if (!s || s.length === 0) return "";
  let count = 1;
  let result = "";

  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      result = result + s[i - 1] + count;
      count = 1;
    }
  }
  return result;
}

