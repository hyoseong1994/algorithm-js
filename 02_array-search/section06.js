function solution(arr) {
  const length = arr.length;
  let max = 0;
  let diagonalA = 0;
  let diagonalB = 0;
  for (let i = 0; i < length; i++) {
    let row = 0;
    let col = 0;
    diagonalA += arr[i][i];
    diagonalB += arr[i][length - 1 - i];
    for (let j = 0; j < length; j++) {
      row += arr[i][j];
      col += arr[j][i];
    }
    max = Math.max(max, row, col);
  }
  max = Math.max(max, diagonalA, diagonalB);
  return max;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
