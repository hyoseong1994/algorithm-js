function solution(n, k) {
  const queue = Array.from({ length: n }, (_v, i) => i + 1);
  let i = 1;
  while (queue.length > 1) {
    const shift = queue.shift();
    if (i % k !== 0) queue.push(shift);
    i++;
  }

  return queue[0];
}

console.log(solution(8, 3));
