function solution(arr) {
  return arr.filter((v, i) => (arr[i - 1] || 0) < v);
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
