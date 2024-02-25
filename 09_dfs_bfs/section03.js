function solution(n, arr) {
  let answer = 0;
  let graph = Array.from({ length: n }, () => Array());
  let ch = Array.from({ length: n }, () => 0);

  arr.forEach(([a, b]) => graph[a].push(b));

  const dfs = (start) => {
    if (start === n) {
      answer++;
      return;
    }
    ch[start] = 1;
    for (let i = 0; i < graph[start].length; i++) {
      const next = graph[start][i];
      if (ch[next] === 1) continue;
      dfs(next);
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
