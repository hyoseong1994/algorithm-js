// function solution(target, arr) {
//   arr.sort((a, b) => a - b);
//   let i = arr.length / 2;
//   while (true) {
//     if (target === arr[i]) return i + 1;
//     if (target > arr[i]) i += parseInt(i / 2);
//     else i -= parseInt(i / 2);
//   }
// }

function solution(target, arr) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
