function solution(s) {
  s.sort((a, b) => b.length - a.length);
  return s[0];
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
