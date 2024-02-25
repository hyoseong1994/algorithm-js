function solution(m, arr) {
  let answer = [];
  let temp = [];
  let ch = Array.from({ length: arr.length }, () => 0);
  const dfs = (level, check) => {
    if (level > m) return;
    if (level === m) {
      answer.push([...temp]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (check[i]) continue;
      temp[level] = arr[i];
      check[i] = 1;
      dfs(level + 1, check);
      check[i] = 0;
    }
  };
  dfs(0, ch);
  return answer.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
