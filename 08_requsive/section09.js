function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  function dfs(i, sum) {
    if (sum > m || i >= answer) return;
    if (sum === m) {
      answer = Math.min(answer, i);
      return;
    }
    for (let j = 0; j < arr.length; j++) {
      dfs(i + 1, sum + arr[j]);
    }
  }

  dfs(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
