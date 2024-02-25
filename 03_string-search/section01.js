function solution(s) {
  const upper = s.toUpperCase();
  const reverse = upper.split("").reverse().join("");
  if (upper === reverse) {
    return "YES";
  }

  return "NO";
}

let str = "goooG";
let str2 = "gooeG";
console.log(solution(str));
console.log(solution(str2));
