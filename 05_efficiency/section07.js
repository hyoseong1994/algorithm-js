function solution(str1, str2) {
  const hash = new Map();
  for (let i = 0; i < str1.length; i++) {
    hash.set(str1[i], hash.has(str1[i]) ? hash.get(str1[i]) + 1 : 1);
  }
  for (let i = 0; i < str2.length; i++) {
    if (!hash.has(str2[i]) || hash.get(str2[i]) === 0) return "NO";
    hash.set(str2[i], hash.get(str2[i]) - 1);
  }
  return "YES";
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
a = "abaCC";
b = "Caaab";
console.log(solution(a, b));
