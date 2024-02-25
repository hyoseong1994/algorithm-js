function solution(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }
  let answer = ["", 0];
  for (const v of map) {
    answer = v[1] > answer[1] ? v : answer;
  }
  return answer[0];
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
