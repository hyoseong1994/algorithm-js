function solution(arr) {
  const n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
let arr1 = [13, 7, 11, 5, 23, 15];
console.log(solution(arr1));
