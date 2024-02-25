function solution(board, moves) {
  let answer = 0;
  const n = board.length - 1;
  let stack = [];
  for (const pos of moves) {
    const j = pos - 1;
    let i = 0;
    while (n > i && board[i][j] === 0) i++;
    let tmp = board[i][j];
    if (tmp === 0) continue;
    board[i][j] = 0;
    if (tmp === stack[stack.length - 1]) {
      stack.pop();
      answer += 2;
    } else {
      stack.push(tmp);
    }
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
