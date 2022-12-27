// function solution(n, arr) {
//   let p1 = 0;
//   let p2 = 0;
//   let answer = 0;
//   let sum = arr[p1];
//   while (p1 < arr.length) {
//     sum += arr[p2++];
//     if (p2 > arr.length) break;
//     if (sum > n) {
//       p1++;
//       p2 = p1 + 1;
//       sum = arr[p1];
//     } else if (sum < n) {
//     } else {
//       answer++;
//       p1++;
//       p2 = p1 + 1;
//       sum = arr[p1];
//     }
//   }
//   return answer;
// }

//best practice
function solution(n, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === n) answer++;
    while (sum >= n) {
      sum -= arr[lt++];
      if (sum === n) answer++;
    }
  }
  return answer;
}
console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
