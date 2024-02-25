function solution(m, songs) {
  let answer = 0;
  let lt = Math.max(...songs);
  let rt = songs.reduce((acc, cur) => acc + cur, 0);
  let mid;

  while (lt <= rt) {
    mid = Math.floor((lt + rt) / 2);
    let sum = 0;
    let cnt = 1;

    for (let x of songs) {
      if (sum + x > mid) {
        cnt++;
        sum = x;
      } else {
        sum += x;
      }
    }

    if (cnt <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr)); // Output: 17

// Test Case 1
let songs1 = [1, 2, 3, 4, 5];
let m1 = 2;
console.log(solution(m1, songs1)); // Output: 9

// Test Case 2
let songs2 = [10, 20, 30, 40, 50];
let m2 = 1;
console.log(solution(m2, songs2)); // Output: 150

// Test Case 3
let songs3 = [5, 10, 15, 20, 25];
let m3 = 5;
console.log(solution(m3, songs3)); // Output: 25

// Test Case 4
let songs4 = [1, 1, 1, 1, 1];
let m4 = 5;
console.log(solution(m4, songs4)); // Output: 1
