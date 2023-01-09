const uniquePaths = (m, n) => {
  let grid = new Array(m).fill(0).map(() => new Array(n));
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (row == 0 || col == 0) grid[row][col] = 1;
      else {
        grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
      }
    }
  }
  return grid[m - 1][n - 1];
};
// console.log(uniquePaths(3, 7));

const uniquePath2 = (m,n)=>{
    let memo = new Array(m).fill(0).map(()=>new Array(n))
    function paathsToPoint(row,col){
        if(row===0||col===0) return 1
        if(!memo[row][col]){
            memo[row][col]=paathsToPoint(row-1,col) + paathsToPoint(row,col-1)
        }
        return memo[row][col]
    }

    return paathsToPoint(m-1,n-1)
}

console.log(uniquePath2(3,7))