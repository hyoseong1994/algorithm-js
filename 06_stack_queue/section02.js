function solution(s) {
  let answer = "";
  const stack = [];
  for (const cur of s) {
    if (cur === "(") stack.push(cur);
    if (cur === ")") {
      stack.pop();
      continue;
    }
    if (stack.length === 0) answer += cur;
  }
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
