// function solution(n) {
//   let answer = 0;
//   const chk = Array.from({ length: n + 1 }, () => 0);
//   chk[1] = 1;
//   chk[2] = 2;
//   function dyn(num) {
//     if (num > n) {
//       answer = chk[n];
//     } else {
//       chk[num] = chk[num - 1] + chk[num - 2];
//       dyn(num + 1);
//     }
//   }
//   dyn(3);
//   return answer;
// }

//best practice
function solution(n) {
  let answer = 0;
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  answer = dy[n];
  return answer;
}

console.log(solution(7));
