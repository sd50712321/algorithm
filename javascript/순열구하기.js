// function solution(m, n, arr) {
//   let answer = 0;
//   const chkArr = Array.from({ length: m }, () => 0);
//   let tmp = Array.from({ length: n }, () => 0);
//   function DFS(L) {
//     if (L === n) {
//       if (chkArr.filter((v) => v === 1).length === n) {
//         console.log(tmp);
//         answer++;
//       }
//     } else {
//       for (let i = 0; i < m; i++) {
//         if (chkArr[i] === 1) {
//           continue;
//         }
//         tmp[L] = arr[i];
//         chkArr[i] = 1;
//         DFS(L + 1);
//         tmp[L] = 0;
//         chkArr[i] = 0;
//         DFS(L + 1);
//       }
//     }
//   }
//   DFS(0);
//   return answer;
// }

//best practice
function solution(m, arr) {
  const answer = [];
  n = arr.length;
  let chk = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push([...tmp]);
    } else {
      for (let i = 0; i < n; i++) {
        if (chk[i] === 0) {
          chk[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          chk[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

// console.log(solution(3, 2, [3, 6, 9]));
console.log(solution(2, [3, 6, 9]));
