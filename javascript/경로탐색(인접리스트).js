//best practice
function solution(arr, n) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array());
  const chk = Array(n + 1).fill(0);
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  function DFS(v) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (chk[graph[v][i]] === 0) {
          chk[graph[v][i]] = 1;
          DFS(graph[v][i]);
          chk[graph[v][i]] = 0;
        }
      }
    }
  }
  chk[1] = 1;
  DFS(1);
  return answer;
}

//best practice
// function solution(arr, n) {
//   let answer = 0;
//   const graph = Array.from(Array(n + 1), () => Array());
//   const chk = Array(n + 1).fill(0);
//   for (let [a, b] of arr) {
//     graph[a][b] = 1;
//   }
//   function DFS(v) {
//     if (v === n) {
//       answer++;
//     } else {
//       for (let i = 1; i <= n; i++) {
//         if (graph[v][i] === 1 && chk[i] === 0) {
//           chk[i] = 1;
//           DFS(i);
//           chk[i] = 0;
//         }
//       }
//     }
//   }
//   chk[1] = 1;
//   DFS(1);
//   return answer;
// }

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 1],
      [2, 3],
      [2, 5],
      [3, 4],
      [4, 2],
      [4, 5],
    ],
    5
  )
);
