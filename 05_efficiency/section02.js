// function solution(arr1, arr2) {
//   const answer = [];
//   arr1.forEach((item) => {
//     const index = arr2.indexOf(item);
//     if (index !== -1) {
//       answer.push(item);
//     }
//   });
//   answer.sort((a, b) => a - b);
//   return answer;
// }

function solution(arr1, arr2) {
  const answer = [];
  let p1 = 0;
  let p2 = 0;
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  while (arr1.length > p1 && arr2.length > p2) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else {
      arr2[p2] >= arr1[p1] ? p1++ : p2++;
    }
  }
  return answer;
}
Object.prototype.sort;

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
