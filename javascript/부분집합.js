// // best practice
// function solution(n) {
//   const answer = [];
//   let chk = Array.from({ length: n + 1 }, () => 0);
//   function DFS(number) {
//     if (number === n + 1) {
//       const result = [];
//       for (let i = 0; i < chk.length; i++) {
//         if (chk[i] === 1) {
//           result.push(i);
//         }
//       }
//       if (result.length > 0) answer.push(result);
//       return;
//     } else {
//       chk[number] = 1;
//       DFS(number + 1);
//       chk[number] = 0;
//       DFS(number + 1);
//     }
//   }
//   DFS(1);
//   return answer;
// }

// best practice
function solution(n) {
  const answer = [];
  let chk = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 0; i < chk.length; i++) {
        if (chk[i] === 1) {
          tmp += i + " ";
        }
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      chk[v] = 1;
      DFS(v + 1);
      chk[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
