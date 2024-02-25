function solution(s) {
  let answer = "";
  for (const char of s) {
    if (char === char.toUpperCase()) answer += char.toLowerCase();
    else answer += char.toUpperCase();
  }
  return answer;
}

console.log(solution("StuDY"));
