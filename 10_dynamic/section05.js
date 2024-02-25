function solution(m, arr) {
  const dy = Array.from({ length: m + 1 }, () => 0);
  arr.forEach(([score, time]) => {
    for (let i = m; i >= time; i--) {
      dy[i] = Math.max(dy[i], dy[i - time] + score);
    }
  });

  return dy[m];
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
