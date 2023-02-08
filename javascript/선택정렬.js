// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = Number.MAX_SAFE_INTEGER;
//     let minIdx = Number.MAX_SAFE_INTEGER;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < min) min = arr[j];
//       minIdx = j;
//     }
//     let temp;
//     if (arr[i] > arr[minIdx]) {
//       arr[i] = temp;
//       arr[i] = arr[minIdx];
//       arr[minIdx] = temp;
//     }
//     return arr;
//   }
// }

//best practice
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

console.log(solution([5, 7, 11, 13, 15, 23]));
