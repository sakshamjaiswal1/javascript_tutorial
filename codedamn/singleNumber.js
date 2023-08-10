function singleNumber(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((acc, curr) => acc + curr, 0);
  }

  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

function missingNumber(nums) {
  const totalSum = (nums.length + 1 * nums.length) / 2;
  const arraySum = nums.reduce((acc, curr) => acc + curr, 0);

  return totalSum - arraySum;
}

function findRestaurant(list1, list2) {
  let result = [];
  let sum = Infinity;

  for (let i = 0; i < list1.length; i++) {
    const secondIndex = list2.indexOf(list1[i]);
    if (secondIndex > -1) {
      const currentSum = secondIndex + i;
      if (currentSum < sum) {
        result = [list1[i]];
      } else if (currentSum === sum) {
        result.push(list1[i]);
      }
    }
  }
  return result;
}

function findDifference(nums1, nums2) {
  let resultNum1 = [];
  let resultNum2 = [];

  for (let i = 0; i < nums1.lenght; i++) {
    if (nums2.indexOf(nums1[i]) === -1) {
      resultNum1.push(nums1[i]);
    }
    if (nums1.indexOf(nums2[i]) === -1) {
      resultNum1.push(nums2[i]);
    }
  }
  return [[...new Set(resultNum1)], [...new Set(resultNum2)]];
}

const duplicateZeros = function (arr) {
  let possibleDups = 0;
  let length = arr.length - 1;
  for (let left = 0; left <= length - possibleDups; left++) {
    if (arr[left] === 0) {
      if (left === length - possibleDups) {
        arr[length] = 0;
        length -= 1;
        break;
      }
      possibleDups++;
    }
  }
  let last = length - possibleDups;

  for (let i = last; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + possibleDups] = 0;
      possibleDups--;
      arr[i + possibleDups] = 0;
    } else {
      arr[i + possibleDups] = arr[i];
    }
  }
};

const maxProfit = function (prices) {
  let smallest = Number.MAX_VALUE;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < smallest) {
      smallest = prices[i];
    } else if (prices[i] - smallest > maxProfit) {
      maxProfit = prices[i] - smallest;
    }
  }
  return maxProfit;
};

function nextGreatestLetter(letters, target) {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) {
      return letters[i];
    }
  }
  return letters[0];
}

function findTheDistanceValue(arr1, arr2, d) {
  let distanceValue = 0;
  for (let i = 0; i < arr1.length; i++) {
    let isDistance = true;
    for (let j = 0; j < arr2.length; j++) {
      if (Maths.abs(arr1[i] - arr2[j]) <= d) {
        isDistance = false;
        break
      }
      
    }
    if(isDistance){
      distanceValue++
    }
  }

  return distanceValue
}
