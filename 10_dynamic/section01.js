// function solution(n) {
//   let answer = 0;

//   const dfs = (i) => {
//     if (n < i) return;
//     if (n === i) {
//       answer++;
//       return;
//     }
//     dfs(i + 1);
//     dfs(i + 2);
//   };
//   dfs(0);
//   return answer;
// }
function solution(n) {
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  return dy[n];
}
console.log(solution(7));
