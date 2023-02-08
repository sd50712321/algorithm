// function solution(number) {
//   let answer;
//   function DFS(L, mul) {
//     if (L === number) answer = mul * L;
//     else {
//       DFS(L + 1, mul * L);
//     }
//   }
//   DFS(1, 1);
//   return answer;
// }
//best practice
function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
}

console.log(solution(99));
