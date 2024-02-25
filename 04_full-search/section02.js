function solution(num) {
  const answer = [];
  num.forEach((val) => {
    const reverse = Number(String(val).split("").reverse().join(""));
    if (isPrime(reverse)) answer.push(reverse);
  });
  return answer;
}

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
