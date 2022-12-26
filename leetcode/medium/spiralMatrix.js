const spiralOrder = (matrix) => {
  let result = [];
  if (matrix.length === 0) {
    return result;
  }
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let direction = 0;
  while (left <= right && top <= bottom) {
    if (direction === 0) {
      for (let x = left; x <= right; x++) {
        result.push(matrix[top][x]);
      }
      top++;
      direction = 1;
    } else if (direction === 1) {
      for (let x = top; x <= bottom; x++) {
        result.push(matrix[x][right]);
      }
      direction = 2;
      right--;
    } else if (direction === 2) {
      for (let x = right; x >= left; x--) {
        result.push(matrix[bottom][x]);
      }
      bottom--;
      direction = 3;
    } else if (direction === 3) {
      for (let x = bottom; x >= top; x--) {
        result.push(matrix[x][left]);
      }
      left++;
      direction = 0;
    }
  }
  return result;
};
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))