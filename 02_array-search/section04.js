function solution(arr) {
  let count = 0;

  return arr.reduce((acc, cur) => {
    if (cur === 1) {
      count++;
      acc += count;
    } else {
      count = 0;
    }
    return acc;
  }, 0);
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
