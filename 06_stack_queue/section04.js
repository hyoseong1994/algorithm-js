function solution(s) {
  let stack = [];
  for (const cur of s) {
    if (!isNaN(cur)) {
      stack.push(Number(cur));
      continue;
    }
    const right = stack.pop();
    const left = stack.pop();
    if (cur === "+") stack.push(left + right);
    else if (cur === "-") stack.push(left - right);
    else if (cur === "*") stack.push(left * right);
    else if (cur === "/") stack.push(left / right);
  }
  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
