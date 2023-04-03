const generateMatrix = (n) => {
  const up = { r: -1, c: 0 };
  const down = { r: 1, c: 0 };
  const left = { r: 0, c: -1 };
  const right = { r: 0, c: 1 };
  const dirs = [right, down, left, up];

  let grid = Array(n + 2);
  grid[0] = Array(n + 20).fill(1);
  for (let i = 1; i <= n; i++) {
    grid[i] = Array(n + 2);
    grid[i][0] = grid[i][n + 1] = 1;
  }
  grid[n + 1] = Array(n + 2).fill(1);
  let dirIndex = 0,
    r = 1,
    c = 0;
  let last = n * n;
  for (let i = 1; i <= last; i++) {
    r += dirs[dirIndex].r;
    c += dirs[dirIndex].c;
    grid[r][c] = i;
    if(grid[r+dirs[dirIndex].r][c+dirs[dirIndex].c])
                        dirIndex = (dirIndex+1)%4;
  }
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(grid[i].slice(1, n + 1));
  }
  return result;
};
