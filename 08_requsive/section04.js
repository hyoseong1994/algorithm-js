// function solution(n) {
//   const answer = [];
//   function dfs(arr, v) {
//     if (v > n) return answer.push(arr);
//     dfs([...arr, v], v + 1);
//     dfs([...arr], v + 1);
//   }
//   dfs([], 1);
//   return answer.filter((f) => f.length !== 0);
// }
function solution(n) {
  const answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function dfs(v) {
    if (v === n + 1) {
      const temp = ch.reduce((acc, cur, i) => {
        if (cur === 1) return acc + i;
        return acc;
      }, "");
      temp && answer.push(temp);
      return;
    }
    ch[v] = 1;
    dfs(v + 1);
    ch[v] = 0;
    dfs(v + 1);
  }
  dfs(1);
  return answer;
}

console.log(solution(3));
