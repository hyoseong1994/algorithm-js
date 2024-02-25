function solution(s) {
  const set = new Set();
  let answer = "";
  for (const char of s) {
    if (!set.has(char)) {
      answer += char;
    }
    set.add(char);
  }
  return answer;
}

console.log(solution("ksekkset"));
