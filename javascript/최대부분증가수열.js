// function solution(arr) {
//   const chk = Array.from({ length: arr.length + 1 }, () => 0);
//   chk[1] = 1;
//   chk[2] = arr[0] < arr[1] ? 2 : 1;
//   for (let i = 2; i <= arr.length; i++) {
//     let max = 0;
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[i] > arr[j]) {
//         max = Math.max(chk[j], max);
//       }
//     }
//     chk[i] = max + 1;
//   }
//   return Math.max(...chk);
// }

//best practice
function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
