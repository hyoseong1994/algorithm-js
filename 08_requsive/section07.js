function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  function dfs(i, time, sum) {
    if (time > m) return;
    if (i >= n) {
      answer = Math.max(answer, sum);
      return;
    }
    dfs(i + 1, time + pt[i], sum + ps[i]);
    dfs(i + 1, time, sum);
  }
  dfs(0, 0, 0);

  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
