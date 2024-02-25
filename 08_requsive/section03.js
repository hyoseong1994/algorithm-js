function solution(n) {
  let pre = [];
  let mid = [];
  let post = [];
  function DFS(v) {
    if (v > n) return;
    pre.push(v);
    DFS(v * 2);
    mid.push(v);
    DFS(v * 2 + 1);
    post.push(v);
  }
  DFS(1);
  return [pre, mid, post];
}

console.log(solution(7));
