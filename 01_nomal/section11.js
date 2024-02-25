function solution(s) {
  let answer = 0;
  for (const char of s) {
    if (char === char.toUpperCase()) {
      answer++;
    }
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
