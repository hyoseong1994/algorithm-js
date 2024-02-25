function solution(arr) {
  let answer = [];
  const sum = arr.reduce((a, b) => a + b, 0);
  outer: for (let i = 0; i < arr.length; i++) {
    const f = arr[i];
    for (let j = 0; j < arr.length; j++) {
      const s = arr[j];
      if (f === s) {
        continue;
      }
      if (sum - (f + s) === 100) {
        answer = arr.filter((item) => item !== f && item !== s);
        break outer;
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
