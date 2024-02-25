// function solution(times) {
//   times.sort((a, b) => (a[0] - a[0] !== 0 ? a[0] - a[0] : a[1] - b[1]));
//   let answer = 0;
//   times.forEach(([_inTime, outTime], i) => {
//     let curPersom = 0;
//     for (let j = i; j < times.length; j++) {
//       const [inTime, _outTime] = times[j];
//       if (outTime > inTime) {
//         curPersom++;
//       }
//     }
//     answer = Math.max(answer, curPersom);
//   });

//   return answer;
// }
function solution(times) {
  let answer = 0;
  const timeline = [];
  times.forEach(([inTime, outTime], i) => {
    timeline.push([inTime, "in"]);
    timeline.push([outTime, "out"]);
  });
  timeline.sort((a, b) => {
    if (a[0] - b[0]) return a[0] - b[0];
    if (a[1] === "out") return -1;
    return 1;
  });
  let count = 0;

  timeline.forEach(([_time, status]) => {
    status === "in" ? count++ : count--;
    answer = Math.max(answer, count);
  });

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
