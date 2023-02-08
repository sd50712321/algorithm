// function solution(n, arr) {
//   const answer = [];
//   const chkArr = Array.from({ length: n }).fill(0);
//   function DFS(number) {
//     if (!number) {
//       let totalTrue = 0;
//       let totalFalse = 0;
//       for (let i = 0; i < chkArr.length; i++) {
//         if (chkArr[i] === 1) {
//           totalTrue += arr[i];
//         } else {
//           totalFalse += arr[i];
//         }
//       }
//       if (totalTrue === totalFalse) return answer.push(1);
//       else answer.push(0);
//     } else {
//       const currentIndex = arr.indexOf(number);
//       chkArr[currentIndex] = 1;
//       DFS(arr[currentIndex + 1]);
//       chkArr[currentIndex] = 0;
//       DFS(arr[currentIndex + 1]);
//     }
//   }
//   DFS(arr[0]);
//   console.log("answer", answer);
//   return answer.some(() => 1) ? "YES" : "NO";
// }

//best practice
function solution(arr) {
  let answer = "NO",
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag === 1) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
console.log(solution([1, 3, 5, 6, 7, 10]));
