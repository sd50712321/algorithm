// function solution(arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   arr.sort((a, b) => a[0] - b[0]);
//   for (let i = 0; i < arr.length; i++) {
//     let cnt = 1;
//     let start = arr[i][0];
//     let end = arr[i][1];
//     for (let k = i + 1; k < arr.length; k++) {
//       if (end > arr[k][0]) continue;
//       else {
//         start = arr[k][0];
//         end = arr[k][1];
//         cnt++;
//       }
//     }
//     answer = Math.max(cnt, answer);
//   }
//   return answer;
// }

//best practice
function solution(arr) {
  let answer = 0;
  arr.sort((a, b) => {
    if (a[1] === a[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of arr) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}
console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
