// function solution(number) {
//   let result = 1;
//   function DFS(n, r) {
//     if (n === 0) return;
//     DFS(parseInt(n / 2, 10), n % 2);
//     result += `${r}`;
//   }
//   DFS(parseInt(number / 2, 10), number % 2);
//   return result;
// }

//best practice
function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2, 10));
      answer += `${n % 2}`;
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
