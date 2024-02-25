function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1] - stable[0];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let count = 1;
    let ep = stable[0];

    for (let i = 1; i < stable.length; i++) {
      if (stable[i] - ep >= mid) {
        count++;
        ep = stable[i];
      }
    }

    if (count >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
