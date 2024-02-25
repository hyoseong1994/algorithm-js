function solution(s) {
  const stack = [];
  for (const cur of s) {
    const length = stack.length;
    const last = stack[length - 1];
    if (length === 0 || last === cur) stack.push(cur);
    else stack.pop();
  }

  return stack.length === 0 ? "YES" : "NO";
}

let a = "(()(()))(())";
console.log(solution(a));
