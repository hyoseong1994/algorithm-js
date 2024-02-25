function solution(s) {
  const answer = [s[0]];
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    const element = s[i];
    const last = answer[answer.length - 1];
    if (last === element) {
      count++;
    } else {
      if (count > 1) {
        answer.push(count);
        count = 1;
      }
      answer.push(element);
    }
  }
  if (count > 1) {
    answer.push(count);
    count = 1;
  }
  return answer.join("");
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
