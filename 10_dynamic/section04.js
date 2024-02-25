// function solution(m, coin) {
//   let answer = 0;
//   let gab = m;
//   coin.sort((a, b) => b - a);
//   for (let i = 0; i < coin.length; i++) {
//     answer += gab / coin[i];
//     gab = gab % coin[i];
//     if (gab === 0) break;
//   }

//   return answer;
// }

function solution(m, coin) {
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;
  coin.forEach((co, i) => {
    for (let j = co; j < dy.length; j++) {
      dy[j] = Math.min(dy[j], dy[j - co] + 1);
    }
  });
  return dy[m];
}
let arr = [1, 2, 5];
console.log(solution(15, arr));
