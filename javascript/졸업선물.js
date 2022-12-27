// function solution(q, arr) {
//   const sortedArr = arr.sort((prev, current) => prev[0] - current[0]);
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < sortedArr.length; i++) {
//     let budget = q[1];
//     let cnt = 0;
//     for (let j = 0; j < sortedArr.length; j++) {
//       const price = i === j ? sortedArr[j][0] / 2 : sortedArr[j][0];
//       const delivery = sortedArr[j][1];
//       const total = price + delivery;
//       if (budget >= total) {
//         budget -= total;
//         cnt++;
//       }
//     }
//     if (cnt > max) max = cnt;
//   }
//   return max;
// }

// best practice
function solution(m, product) {
  let answer = 0;
  const n = product.length;
  product = product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
