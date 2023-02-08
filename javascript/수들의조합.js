// function solution(n, arr, m) {
//   let cnt = 0;
//   const tmp = [];
//   function DFS(L, s) {
//     if (L === n) {
//       const sum = tmp.reduce((a, b) => a + b);
//       if (sum % m === 0) cnt++;
//     } else {
//       for (let i = s; i < arr.length; i++) {
//         tmp.push(arr[i]);
//         DFS(L + 1, i + 1);
//         tmp.pop();
//       }
//     }
//   }
//   DFS(0, 0);
//   return cnt;
// }
// console.log(solution(3, [2, 4, 5, 8, 12], 6));

//best practice
function solution(n, k, arr, m) {
  let answer = 0;
  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        console.log("i", i);
        console.log("s", s);
        console.log("sum", sum);
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}
console.log(solution(5, 3, [2, 4, 5, 8, 12], 6));
