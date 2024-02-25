function solution(n, m) {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);
  const dfs = (level, start) => {
    if (level === m) {
      temp.sort((a, b) => a - b);
      answer.push([...temp]);
      return;
    }
    for (let i = start; i <= n; i++) {
      temp[level] = i;
      dfs(level + 1, i + 1);
    }
  };
  dfs(0, 1);
  return answer;
}

console.log(solution(4, 2));
