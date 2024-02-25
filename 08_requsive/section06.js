function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  function dfs(i, sum) {
    if (sum > c) return;
    if (i >= arr.length) {
      answer = Math.max(answer, sum);
      return;
    }
    dfs(i + 1, sum + arr[i]);
    dfs(i + 1, sum);
  }
  dfs(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
