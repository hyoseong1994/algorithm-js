function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function dfs(i) {
    if (i === m) {
      answer.push([...tmp]);
      return;
    }
    for (let j = 1; j <= n; j++) {
      tmp[i] = j;
      dfs(i + 1);
    }
  }
  dfs(0);

  return answer;
}

console.log(solution(3, 2));

function plusA(a) {
  return a + 1;
}
function plusB(a) {
  return ++a;
}
let c = 1;
console.log(plusA(c));
console.log(c);
console.log(plusA(c));
console.log(c);
