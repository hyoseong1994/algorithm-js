function solution(n) {
  function dfs(num) {
    if (!num) return;
    dfs(num - 1);
    console.log(num);
  }
  dfs(n);
}

solution(3);
