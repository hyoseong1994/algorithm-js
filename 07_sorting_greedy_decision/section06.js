// function solution(arr) {
//   let hyeon = 0;
//   let friend = 0;
//   arr.forEach((num, i) => {
//     if (!hyeon && num >= arr[i + 1]) hyeon = i + 1;
//     if (num < arr[i - 1]) friend = i + 1;
//   });
//   return [hyeon, friend];
// }
function solution(arr) {
  const answer = [];
  const sort = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sort[i]) answer.push(i + 1);
  }

  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
console.log(solution(arr2));
