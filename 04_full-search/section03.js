function solution(test) {
  const answer = 0;
  const student = test[0].length;
  for (let i = 1; i <= student; i++) {
    for (let j = 1; j <= student; j++) {
      if (i !== j) {
        const isMento = test.reduce((acc, cur) => {
          const mentoRank = cur.indexOf(i);
          const mentiRank = cur.indexOf(j);
          if (mentoRank > mentiRank) return false;
          return acc;
        }, true);
        if (isMento) answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
