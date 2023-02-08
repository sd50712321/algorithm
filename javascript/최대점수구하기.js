// function solution(limit, arr) {
//   const n = arr.length;
//   let answer = Number.MIN_SAFE_INTEGER;
//   let timeSum = 0;
//   function DFS(L, point, time) {
//     if (time > limit[1]) {
//       return;
//     } else if (L === n) {
//       answer = Math.max(answer, point);
//     } else {
//       timeSum += arr[L][1];
//       DFS(L + 1, point + arr[L][0], timeSum);
//       timeSum -= arr[L][1];
//       DFS(L + 1, point, timeSum);
//     }
//   }
//   DFS(0, 0, 0);
//   return answer;
// }

//best practice
function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, 0, 0);

  return answer;
}

const ps = [10, 25, 15, 6, 7];
const pt = [5, 12, 8, 3, 4];

console.log(solution(20, ps, pt));
