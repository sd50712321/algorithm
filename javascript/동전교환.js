// function solution(total, coins) {
//   coins.sort((a, b) => a - b);
//   let answer;
//   let cnt = 0;
//   function DFS() {
//     if (total === 0) {
//       answer = cnt;
//     } else {
//       for (let i = coins.length - 1; i >= 0; i--) {
//         while (coins[i] <= total) {
//           cnt++;
//           total -= coins[i];
//           DFS();
//         }
//       }
//     }
//   }
//   DFS(total);
//   return answer;
// }
// function solution(total, coins) {
//   let answer = Number.MAX_SAFE_INTEGER;
//   coins.sort((a, b) => a - b);
//   function DFS(L, sum) {
//     if (sum > total) return;
//     if (sum === total) {
//       answer = Math.min(answer, L - 1);
//     } else {
//       for (let i = 0; i < coins.length; i++) {
//         sum += coins[i];
//         DFS(L + 1, sum);
//       }
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }

//best practice
function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > m || L >= answer) return;
    if (sum === m) {
      console.log(L, sum);
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(15, [1, 2, 5]));
