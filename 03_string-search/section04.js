// function solution(s, t) {
//   const answer = [];
//   let targetIndex = s.indexOf(t);
//   for (let i = 0; i < s.length; i++) {
//     const element = s.slice([i], s.length);
//     const elTargetIndex = element.indexOf(t) + i;
//     const targetInterval = Math.abs(targetIndex - i);
//     const elementInterval = Math.abs(elTargetIndex - i);
//     if (targetInterval > elementInterval) {
//       targetIndex = elTargetIndex;
//       answer.push(Math.min(elementInterval));
//     } else {
//       answer.push(Math.min(targetInterval));
//     }
//   }
//   return answer;
// }

function solution(s, t) {
  const answer = Array.from({ length: s.length }, (v, i) => i + 1);

  let count = 1000;
  answer.forEach((_v, i) => {
    if (s[i] === t) {
      count = 0;
    } else {
      count++;
    }
    answer[i] = count;
  });
  count = 1000;
  for (let i = answer.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      count = 0;
    } else {
      count++;
      answer[i] = Math.min(answer[i], count);
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
