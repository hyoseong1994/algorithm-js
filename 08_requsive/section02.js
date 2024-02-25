function solution(n) {
  function dfs(num) {
    if (!num) return "";
    return dfs(parseInt(num / 2)) + (num % 2);
  }
  return dfs(n);
}

console.log(solution(11));
