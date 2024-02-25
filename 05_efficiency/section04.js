// function solution(m, arr) {
//   let answer = 0;
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let sum = arr[i];
//     if (m >= sum) answer++;
//     for (let j = i + 1; j < n; j++) {
//       sum += arr[j];
//       if (m >= sum) answer++;
//     }
//   }
//   return answer;
// }

function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt];
      lt++;
    }
    answer += rt - lt + 1;
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
