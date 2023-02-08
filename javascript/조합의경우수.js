// function factorial(n) {
//   if (n === 1) return 1;
//   else return n * factorial(n - 1);
// }

// function solution(a, b) {
//   let answer;
//   function DFS(n, r) {
//     if (r === 0) return 1;
//     else {
//       let number =
//         (factorial(n - 1) / factorial(n - r + 1)) * factorial(r - 1) +
//         (factorial(n - 1) / factorial(n - 1 - r)) * factorial(r);
//     }
//   }
//   DFS(a, b);
// }

//best practice
function solution(n, r) {
  let answer;
  const dy = Array.from(Array(n + 1), () => Array(r + 1).fill(0));
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else {
      return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }
  answer = DFS(n, r);
  return answer;
}
console.log(solution(5, 3));
console.log(solution(33, 19));
