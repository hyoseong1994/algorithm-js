function solution(n, arr) {
  let answer = 0;
  let max = 0;
  arr.forEach((val) => {
    const num = String(val).split("");
    const sum = num.reduce((acc, cur) => acc + Number(cur), 0);
    if (sum > max) {
      answer = val;
      max = sum;
    } else if (max === sum) {
      answer = Math.max(answer, val);
    }
  });
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
