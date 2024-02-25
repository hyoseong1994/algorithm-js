function solution(arr) {
  return arr.map((item) => {
    const filter = arr.filter((f) => f > item);
    return filter.length + 1;
  });
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
