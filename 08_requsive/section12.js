function solution(n, r) {
  const memo = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));
  const dfs = (level, choice) => {
    if (level === choice || choice === 0) return 1;
    if (memo[level][choice]) return memo[level][choice];
    const value = dfs(level - 1, choice - 1) + dfs(level - 1, choice);
    memo[level][choice] = value;
    return value;
  };

  const answer = dfs(n, r);
  console.log(memo);
  return answer;
}

console.log(solution(5, 3));
console.log(solution(33, 19));
