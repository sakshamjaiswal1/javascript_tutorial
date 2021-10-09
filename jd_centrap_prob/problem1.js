console.log("problem1");

const checkFun = (x, y) => x === 100 || y === 100 || x + y === 100;

// console.log(checkFun(50,50))

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

// console.log(getFileExtension('app.js'))

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

// console.log(moveCharsForward("sak"));

const fromatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth();
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
};

// console.log(fromatDate())
const addnew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);
console.log(addnew('New gifts'))