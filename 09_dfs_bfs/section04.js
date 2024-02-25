function solution(board) {
  let answer = 0;

  const n = board.length;
  const finish = n - 1;
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const dfs = (x, y) => {
    if (x === finish && y === finish) {
      answer++;
    }
    board[x][y] = 1;
    for (const [dx, dy] of direction) {
      const [nx, ny] = [x + dx, y + dy];
      const isInvalid =
        nx < 0 || ny < 0 || nx >= n || ny >= n || board[nx][ny] === 1;
      if (isInvalid) continue;
      dfs(nx, ny);
    }
    board[x][y] = 0;
  };
  dfs(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
