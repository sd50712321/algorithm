// const result = [];
// function solution(n) {
//   if (n > 0) {
//     result.push(n--);
//     return solution(n);
//   } else {
//     return result.reverse();
//   }
// }

//best practice
function solution(n) {
  const result = [];
  function DFS(L) {
    result.push(L);
    if (L === 0) return;
    if (L > 0) {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}
solution(3);
