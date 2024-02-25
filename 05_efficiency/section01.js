function solution(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}
// function solution(arr1, arr2) {
//   return arr1.concat(arr2).sort((a, b) => a - b);
// }
function solution(arr1, arr2) {
  const answer = [];
  const n = arr1.length;
  const m = arr2.length;
  let p1 = 0;
  let p2 = 0;
  while (n > p1 && m > p2) {
    if (arr1[p1] >= arr2[p2]) {
      answer.push(arr2[p2]);
      p2++;
    } else {
      answer.push(arr1[p1]);
      p1++;
    }
  }
  let stock = [];
  if (n > p1) {
    stock = arr1.slice(p1, n);
  } else if (m > p2) {
    stock = arr2.slice(p2, m);
  }
  return answer.concat(stock);
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
