// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j - 1] >= arr[j]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//     }
//   }
//   return arr;
// }

//best practice
function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
