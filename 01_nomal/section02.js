function solution(a, b, c) {
  const max = Math.max(a, b, c);
  const sum = a + b + c;
  if (sum - max > max) return "YES";
  return "NO";
}

console.log(solution(13, 33, 17));
