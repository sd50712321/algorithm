// function solution(questions, time) {
//   //   questions.sort((a, b) => a[1] - b[1]);
//   const dq = Array.from({ length: time + 1 }, () => 0);
//   for (let i = 0; i < questions.length; i++) {
//     for (let j = dq.length - 1; j >= questions[i][1]; j--) {
//       dq[j] = Math.max(dq[j], dq[j - questions[i][1]] + questions[i][0]);
//     }
//   }
//   return Math.max(...dq);
// }

//best practice
function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0];
    let pt = arr[i][1];
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[m];
  return answer;
}
// console.log(
//   solution(
//     [
//       [10, 5],
//       [25, 12],
//       [15, 8],
//       [6, 3],
//       [7, 4],
//     ],
//     20
//   )
// );
console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
