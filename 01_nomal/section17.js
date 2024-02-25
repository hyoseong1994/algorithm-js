// function solution(s) {
//   const set = new Set();
//   const answer = [];
//   s.forEach((str) => {
//     if (!set.has(str)) {
//       answer.push(str);
//     }
//     set.add(str);
//   });
//   return answer;
// }
function solution(s) {
  return s.filter((v, i) => s.indexOf(v) === i);
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
