console.log("problem5");
// sorting string to alphabetic order

const alphabeticalOrder = (str) =>
  str
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");

// console.log(alphabeticalOrder('saksham'))

// count number of vowels in the string

const countVowels = (str, letters = ["a", "e", "i", "o", "u"]) =>
  str.split("").filter((s) => letters.indexOf(s) > -1).length;

// console.log(countVowels('saksham jaiswal'))

// javascript function to convert an amount to coin

const countCoins = (money, coins = [10, 5, 2, 1]) => {
  const totalCoins = [];
  for (let i = 0; i < coins.length; i++) {
    const thisCoinNum = Math.floor(money / coins[i]);
    for (let j = 0; j < thisCoinNum; j++) {
      totalCoins.push(coins[i]);
    }
    money -= coins[i] * thisCoinNum;
  }
  return totalCoins;
};

// console.log(countCoins(123))

// extract unique char from string

const getUniqueChar = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1).join('');

// console.log(getUniqueChar('saksham jaiswal'))    

const getUniqueChar2=(str)=>[...new Set(str.split(''))].join('')

// console.log(getUniqueChar2('saaaaaaaaaaaaaa'))

// find the first non repeated character in string

const getFirstUnique=str=>str.split('').filter((item,index,arr)=>arr.filter((arrItem)=>arrItem==item).length===1)

console.log(getFirstUnique('sssssaaaaaay llllaaaz'))