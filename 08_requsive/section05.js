function solution(arr) {
  let answer = "NO";
  let isComplete = false;
  const n = arr.length;
  const total = arr.reduce((acc, cur) => acc + cur, 0);
  function dfs(sum, i) {
    if (i >= n) {
      if (total - sum === sum) {
        answer = "YES";
        isComplete = true;
      }
      return;
    }
    dfs(sum + arr[i], i + 1);
    dfs(sum, i + 1);
  }
  dfs(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
let arr1 = [1, 2, 4];
console.log(solution(arr1));
