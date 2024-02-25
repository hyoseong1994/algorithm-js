const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
];

function solution(board) {
  let answer = 0;
  const n = board.length;

  const dfs = (x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= n || board[x][y] === 0) return;
    board[x][y] = 0;
    direction.forEach(([dx, dy]) => dfs(x + dx, y + dy));
  };

  const bfs = (i, j) => {
    let queue = [[i, j]];
    while (queue.length) {
      const [x, y] = queue.shift();
      direction.forEach(([dx, dy]) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
          queue.push([nx, ny]);
          board[nx][ny] = 0;
        }
      });
    }
  };

  board.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col === 1) {
        bfs(i, j);
        answer++;
      }
    });
  });

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
