function solution(s) {
  const length = s.length;
  const center = Math.floor(length / 2);
  const isEven = length % 2 === 0 ? 1 : 0;
  return s.substr(center - isEven, isEven + 1);
}

console.log(solution("study"));
console.log(solution("good"));
