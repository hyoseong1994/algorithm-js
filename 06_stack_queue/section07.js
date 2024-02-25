function solution(need, plan) {
  const queue = need.split("");

  for (const x of plan) {
    if (queue.includes(x) && queue.shift() !== x) break;
  }

  return queue.length === 0 ? "YES" : "NO";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
let c = "BDAGEC";
console.log(solution(a, c));
let d = "CDAGE";
console.log(solution(a, d));
let g = "CBDGE";
console.log(solution(a, g));
