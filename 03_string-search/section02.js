function solution(s) {
  const str = s.toUpperCase().replace(/[^A-z]/g, "");
  const reverse = str.split("").reverse().join("");
  if (str === reverse) {
    return "YES";
  }
  return "NO";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
let str2 = "found7, time: study; Yduts; emia, 7Dnuof";
console.log(solution(str));
console.log(solution(str2));
