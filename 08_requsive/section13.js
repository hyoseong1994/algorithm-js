function solution(n, f) {
  let answer = [];
  const nArr = Array(n).fill(0);
  const conbi = (num, choice) => {
    if (num === choice || choice === 0) return 1;
    return conbi(num - 1, choice - 1) + conbi(num - 1, choice);
  };
  const conbinations = nArr.map((_con, index) => {
    return conbi(n - 1, index);
  });

  let check = Array(n + 1).fill(0);
  let temp = Array(n).fill(0);
  const dfs = (l, sum) => {
    if (l > n || answer.length > 0) return;
    if (sum === f && l === n) {
      answer = [...temp];
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (check[i]) continue;
      check[i] = 1;
      temp[l] = i;
      dfs(l + 1, sum + i * conbinations[l]);
      check[i] = 0;
    }
  };
  dfs(0, 0);
  return answer;
}

console.log(solution(4, 16));
