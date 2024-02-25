function solution(arr) {
  let answer = 0;
  const length = arr.length;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const item = arr[i][j];
      let bong = true;
      dir.forEach(([dx, dy]) => {
        const idx = i + dx;
        const jdy = j + dy;
        if (
          idx < length &&
          idx >= 0 &&
          jdy < length &&
          jdy >= 0 &&
          item < arr[idx][jdy]
        ) {
          bong = false;
          return false;
        }
      });
      if (bong) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
