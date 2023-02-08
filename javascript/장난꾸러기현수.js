// function solution(arr) {
//   const answer = [];
//   const sortedArr = [...arr].sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== sortedArr[i]) {
//       if (answer.length > 0 && arr[answer[0] - 1] < arr[i]) {
//         answer.push(answer[0]);
//         answer.unshift(i + 1);
//       } else {
//         answer.push(i + 1);
//       }
//     }
//   }
//   return answer;
// }

//best practice
function solution(arr) {
  let answer = [];
  let sortArr = arr.slice().sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
