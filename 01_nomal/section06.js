function solution(arr) {
  const odds = arr.filter((f) => f % 2 !== 0);
  const sum = odds.reduce((a, b) => a + b, 0);
  odds.push(sum);
  return [sum, Math.min(...odds)];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
