// function solution(m, r) {
//   const dr = Array.from(Array(m + 1), () => Array(r + 1).fill(0));
//   function DFS(L, s) {
//     if (s === r) {
//       console.log(L, s);
//     } else {
//       for (let i = L + 1; i <= m; i++) {
//         DFS(L + 1, i);
//       }
//     }
//   }
//   DFS(0, 0);
// }

//best practice
function solution(n, m) {
  let answer = [];
  const tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push([...tmp]);
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
console.log(solution(4, 3));
console.log(solution(4, 4));
