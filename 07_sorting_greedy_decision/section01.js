// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const cur = arr[i];
//     const slice = arr.slice(i);
//     const min = Math.min(...slice);
//     const findIndex = arr.findIndex((f) => min === f);
//     arr.splice(findIndex, 1, cur);
//     arr.splice(i, 1, min);
//   }
//   return arr;
// }
function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
let arr1 = [13, 7, 11, 5, 23, 15];
console.log(solution(arr1));
