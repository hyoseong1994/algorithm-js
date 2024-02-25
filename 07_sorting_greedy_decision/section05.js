function solution(size, arr) {
  let answer = [];
  arr.forEach((curProcess) => {
    answer = answer.filter((f) => f !== curProcess);
    answer.unshift(curProcess);
    if (answer.length > size) answer.pop();
  });

  return answer;
}

// function solution(size, arr) {
//   const answer = Array.from({ length: size }, () => 0);
//   arr.forEach((curProcess) => {
//     let hit = answer.findIndex((f) => f === curProcess);
//     let j = hit === -1 ? size - 1 : hit;

//     while (j >= 0) {
//       answer[j] = answer[j - 1];
//       j--;
//     }
//     answer[0] = curProcess;
//   });

//   return answer;
// }

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
