function solution(arr) {
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;

  for (let i = 1; i < dy.length; i++) {
    let max = 0;
    if (arr[i] > arr[i - 1]) max++;
    dy[i] = dy[i - 1] + max;
  }

  return Math.max(...dy);
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
