function solution(meeting) {
  meeting.sort((a, b) => (a[1] - b[1] !== 0 ? a[1] - b[1] : a[0] - b[0]));
  let answer = 0;
  let startTime = 0;
  meeting.forEach(([start, end]) => {
    if (start >= startTime) {
      startTime = end;
      answer++;
    }
  });

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
let arr1 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr1));
