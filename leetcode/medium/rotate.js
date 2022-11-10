const rotate = (matrix) => {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return;
  }
  const rotateLayer = (matrix, start, end) => {
    for (let i = 0; start + i < end; i++) {
      let tempTop = matrix[start][start + i]; // save top
      matrix[start][start + i] = matrix[end - i][start]; // left to top
      matrix[end - i][start] = matrix[end][end - i]; // bottom to left
      matrix[end][end - i] = matrix[start + i][end]; // right to bottom
      matrix[start + i][end] = tempTop;
    }
  };
  let numberOfLayers = Math.floor(matrix.length / 2);
  for (let i = 0; i < numberOfLayers; i++) {
    rotateLayer(matrix, i, matrix.length - 1 - i);
  }
};
const permute = function (nums) {
  const result = [];
  function traverse(nums, storeArr) {
    if (nums.length === 0) {
      result.push([...storeArr]);
      return;
    }
    for (let num of nums) {
      storeArr.push(num);
      const value = nums.filter((item) => item !== num);
      traverse(value, storeArr);
      storeArr.pop();
    }
  }
  traverse([...nums], []);
  return result;
};
var permutes = function (nums) {
  const res = [];
  const backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach((n) => {
      if (path.includes(n)) {
        return;
      }
      backtrack(path.concat(n));
    });
  };
  backtrack([]);
  return res;
};
var permute2 = function (nums) {
  var results = [];
  var heapPermutation = function (nums, k) {
    if (k == 1) {
      results.push(nums.slice());
    } else {
      for (var i = 0; i < k; i++) {
        heapPermutation(nums, k - 1);
        var temp = nums[k - 1];
        if (k % 2 == 0) {
          nums[k - 1] = nums[i];
          nums[i] = temp;
        } else {
          nums[k - 1] = nums[0];
          nums[0] = temp;
        }
      }
    }
    return results;
  };
  return heapPermutation(nums, nums.length);
};
