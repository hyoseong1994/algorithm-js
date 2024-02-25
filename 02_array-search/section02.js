function solution(arr) {
  let answer = 0;
  while (arr.length) {
    const pop = arr.pop();
    const max = Math.max(...arr);
    if (pop > max) answer++;
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
