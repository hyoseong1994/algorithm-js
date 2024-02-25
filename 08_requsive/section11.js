function solution(n) {
  const dfs = (level) => {
    if (level === 1) return 1;
    return level * dfs(level - 1);
  };
  return dfs(n);
}

console.log(solution(5));
