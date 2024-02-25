function solution(n, arr) {
  let answer = 0;
  let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);

  arr.forEach(([a, b]) => (graph[a][b] = 1));
  const dfs = (start) => {
    if (start === n) {
      answer++;
      return;
    }
    ch[start] = 1;
    for (let i = 1; i <= n; i++) {
      if (ch[i] === 1 || graph[start][i] === 0) continue;
      dfs(i);
    }
    ch[start] = 0;
  };
  dfs(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
