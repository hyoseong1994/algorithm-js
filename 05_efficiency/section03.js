// function solution(m, arr) {
//   const answer = [];
//   const n = arr.length;

//   let p1 = 0;
//   let p2 = 1;
//   while (n > p1 || n > p2) {
//     const slice = arr.slice(p1, p2);
//     const sum = slice.reduce((acc, cur) => acc + cur, 0);
//     if (sum === m) answer.push(slice);
//     p2++;
//     if (p2 > n) {
//       p1++;
//       p2 = p1 + 1;
//     }
//   }
//   console.log(answer);
//   return answer.length;
// }

function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let rt = 1;
  while (arr.length > rt) {
    const slice = arr.slice(lt, rt);
    const sum = slice.reduce((acc, cur) => acc + cur, 0);
    if (sum === m) answer++;
    if (m > sum) rt++;
    if (sum >= m) lt++;
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
