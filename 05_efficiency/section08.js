// function solution(map1, map2) {
//   const m = map2.length;
//   const hash = new Map();
//   for (let i = 0; i < m; i++) {
//     hash.set(map2[i], hash.has(map2[i]) ? hash.get(map2[i]) + 1 : 1);
//   }
//   let answer = 0;
//   for (let i = 0; i < map1.length - 2; i++) {
//     const temp = new Map(hash);
//     let target = i;
//     while (i + m >= target) {
//       if (!temp.has(map1[target])) break;
//       temp.set(map1[target], temp.get(map1[target]) - 1);
//       if (temp.get(map1[target]) === 0) temp.delete(map1[target]);
//       target++;
//     }
//     if (temp.size === 0) answer++;
//   }
//   return answer;
// }

function solution(s, t) {
  const m = t.length;
  const th = new Map();
  const sh = new Map();
  for (let i = 0; i < m; i++) {
    th.set(s[i], th.has(s[i]) ? th.get(s[i]) + 1 : 1);
    sh.set(t[i], sh.has(t[i]) ? sh.get(t[i]) + 1 : 1);
  }
  const shSize = sh.size;
  let lt = 0;
  let rt = m - 1;
  let answer = 0;
  while (s.length > rt) {
    if (th.size === shSize && sameHash(th, sh)) answer++;
    const ltNum = th.get(s[lt]);
    if (ltNum > 1) {
      th.set(s[lt], ltNum - 1);
    } else {
      th.delete(s[lt]);
    }
    lt++;
    rt++;
    th.set(s[rt], th.has(s[rt]) ? th.get(s[rt]) + 1 : 1);
  }
  return answer;
}

function sameHash(hash1, hash2) {
  for (const [key, val] of hash1)
    if (!hash2.has(key) || hash2.get(key) !== val) return false;
  return true;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
