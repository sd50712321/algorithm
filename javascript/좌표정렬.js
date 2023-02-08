// function solution(arr) {
//   arr.sort((a, b) => a[0] - b[0]);
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i][0] === arr[i + 1][0] && arr[i][1] > arr[i + 1][1]) {
//       [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//     }
//   }
//   return arr;
// }

//best practice
function solution(arr) {
  const answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return answer;
}

console.log(
  solution([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
