const exist = (board, word) => {
  const dfsTraversal = (row, col, board, word, idx, visiting) => {
    if (
      row < 0 ||
      row > board.length - 1 ||
      col < 0 ||
      col > board[0].length - 1 ||
      board[row][col] !== word[idx] ||
      visiting.get(`${row}-${col}`)
    ) {
      return;
    }
    if (idx === word.length - 1) {
      return true;
    }
    visiting.set(`${row}-${col}`, true);
    let DIRECTIONS = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    for (let dir of DIRECTIONS) {
      if (
        dfsTraversal(row + dir[0], col + dir[1], board, word, idx + 1, visiting)
      ) {
        return true;
      }
    }
    visiting.set(`${row}-${col}`, false);
  };

  if (board === null || board.lenght === 0 || board[0].length === 0) {
    return false;
  }
  let visiting = new Map();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfsTraversal(i, j, board, word, 0, visiting)) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(
  exist(
    [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
    "ABCB"
  )
);

