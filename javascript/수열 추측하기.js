// function solution(n, num) {
//   let answer = "";
//   const tmp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
//   function combination(n, r) {
//     if (tmp[n][r] > 0) return tmp[n][r];
//     if (n === r || r === 0) return 1;
//     else {
//       return (tmp[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
//     }
//   }
//   const tmp2 = Array.from({ length: n });
//   for (let i = 0; i < tmp2.length; i++) {
//     tmp2[i] = combination(n - 1, i);
//   }

//   const m = tmp2.length;
//   const chk = Array.from({ length: m }, () => 0);
//   const perArr = Array.from({ length: m }, () => 0);
//   function permutation(L) {
//     if (L === m) {
//       console.log("perArr", perArr);
//       console.log("tmp2", tmp2);
//       let sum = 0;
//       for (let i = 0; i < chk.length; i++) {
//         if (chk[i] === 1) {
//           sum += tmp2[i] * perArr[i];
//         }
//       }
//       if (sum === num) {
//         answer = perArr;
//       }
//       console.log("sum", sum);
//     } else {
//       for (let i = 0; i < m; i++) {
//         if (chk[i] === 0) {
//           chk[i] = 1;
//           perArr[L] = L + 1;
//           permutation(L + 1);
//           chk[i] = 0;
//         }
//       }
//     }
//   }
//   permutation(0);
//   console.log("tmp2", tmp2);
//   return answer;
// }

function solution(n, f) {
  let answer,
    flag = 0;
  const dy = Array.from(Array(n + 1), () => Array(n + 1));
  const ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else {
      return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
    }
  }
  function dfs(L, sum) {
    if (L === n) {
      if (flag) return;
      if (sum === f) {
        answer = [...p];
        flag = 1;
      }
    } else {
      console.log("ch", ch);
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          dfs(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  dfs(0, 0);
  return answer;
}
console.log(solution(4, 16));
