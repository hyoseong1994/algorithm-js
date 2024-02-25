function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      continue;
    }
    stack.pop();
    const stick = s[i - 1] === "(" ? stack.length : 1;
    answer += stick;
  }
  return answer;
}

let a = "()(((()())(())()))(())";
let b = "(((()(()()))(())()))(()())";
console.log(solution(a));
console.log(solution(b));
