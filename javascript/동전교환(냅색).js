// function solution(arr, n) {
//   arr.sort((a, b) => a - b);
//   const dy = Array.from({ length: n + 1 }, () => 0);
//   dy[0] = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr[i]; j <= n; j++) {
//       // +1은 해당 동전을 사용한다고 했을 때
//       const nv = dy[j - arr[i]] + 1;
//       if (dy[j] !== 0) dy[j] = Math.min(dy[j], nv);
//       else dy[j] = nv;
//     }
//   }
//   return dy[n];
// }
//best practice
function solution(coin, m) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
}
console.log(solution([1, 2, 5], 15));
