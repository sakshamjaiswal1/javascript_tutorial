console.log("this is tut 51");

// Iterators
function iterator(values) {
  let nextIndex = 0;
  // we will return an object
  return {
    next: function () {
      if (nextIndex < values.length) {
        return {
          // we will return below object
          value: values[nextIndex++],
          done: false,
        };
      } else {
        return {
          // we will return below object with only done
          done: true,
        };
      }
    },
  };
}

const myArray = ["Apples", "Grapes", "Oranges", "Bhindi"];

console.log(myArray);
// Using the iterator
const fruits = iterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
