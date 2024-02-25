// function solution(m, product) {
//   let answer = 0;
//   const result = [];

//   function dfs(start, current) {
//     result.push([...current]);
//     for (let i = start; i < product.length; i++) {
//       current.push(product[i]);
//       dfs(i + 1, current);
//       current.pop();
//     }
//   }

//   dfs(0, []);
//   result.forEach((item) => {
//     if (item.length > 0) {
//       const temp = [...item];
//       temp.sort((a, b) => b[0] - a[0]);
//       const [prod, parcel] = temp.shift();
//       let sum = prod / 2 + parcel;
//       sum += temp.reduce((acc, [curProduct, curParcel]) => {
//         return acc + curProduct + curParcel;
//       }, 0);

//       if (sum === m) {
//         answer = item.length;
//         console.log(item);
//       }
//     }
//   });

//   return answer;
// }

function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => Math.hypot(...a) - Math.hypot(...b));

  product.forEach(([prod, parcel], i) => {
    let money = m - (prod / 2 + parcel);
    let count = 1;
    for (let j = 0; i < n; j++) {
      const [prod2, parcel2] = product[j];
      if (i !== j && money >= prod2 + parcel2) {
        money -= prod2 + parcel2;
        count++;
      } else if (prod2 + parcel2 > money) {
        break;
      }
    }
    answer = Math.max(answer, count);
  });

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
