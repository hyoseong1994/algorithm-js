function solution(s, e) {
  let answer = -1;
  const dist = Array.from({ length: 10001 }, () => 0);
  const ch = Array.from({ length: 10001 }, () => 0);
  dist[s] = 0;
  const queue = [s];
  while (queue.length) {
    let cur = queue.shift();
    for (const nx of [cur - 1, cur + 1, cur + 5]) {
      if (nx === e) return dist[cur] + 1;
      if (nx > 0 && nx < 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        dist[nx] = dist[cur] + 1;
        queue.push(nx);
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));
console.log(solution(8, 3));

function solution(s, e) {
  let answer = -1;
  const ch = Array.from({ length: 10001 }, () => 0);
  const queue = [s];
  ch[s] = 1; // Mark the starting point as visited
  let level = 0;

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let cur = queue.shift();

      for (const nx of [cur - 1, cur + 1, cur + 5]) {
        if (nx === e) return level + 1;

        if (nx > 0 && nx < 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }

    level++; // Move to the next level
  }

  return answer;
}

console.log(solution(5, 14)); // output: 3
console.log(solution(8, 3)); // output: 5
