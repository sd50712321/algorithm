// function solution(cap, arr) {
//   let max = Number.MIN_SAFE_INTEGER;
//   const n = arr.length;
//   let chkArr = Array.from({ length: n }, () => 0);
//   arr.sort((a, b) => a - b);
//   function DFS(l, sum) {
//     if (l === n) {
//       const total2 = chkArr.reduce((a, b, i) => {
//         return b ? a + arr[i] : a;
//       }, 0);
//       if (cap >= total2) {
//         max = Math.max(max, total2);
//       }
//     } else {
//       chkArr[l] = 1;
//       DFS(l + 1, sum + arr[l]);
//       chkArr[l] = 0;
//       DFS(l + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return max;
// }

//best practice
function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
