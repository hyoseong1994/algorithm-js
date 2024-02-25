function solution(str) {
  const numStr = str.replace(/[^0-9]/g, "");
  return parseInt(numStr);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
