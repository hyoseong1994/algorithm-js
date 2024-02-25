function solution(a, b) {
  return a.map((v, i) => {
    if (v === b[i]) {
      return "D";
    }
    if (v + b[i] === 4) {
      return v > b[i] ? "B" : "A";
    }
    return v > b[i] ? "A" : "B";
  });
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
