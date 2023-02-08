// function count(start, end, mid) {
//   let cnt = 0;
//   while (start <= end) {
//     start += mid;
//     cnt++;
//   }
//   return cnt;
// }

// function solution(n, arr) {
//   arr.sort((a, b) => a - b);
//   let lt = 1;
//   let rt = arr[arr.length - 1];
//   let end = arr[arr.length - 1];
//   let answer = 0;
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2, 10);
//     const cnt = count(lt, end, mid);
//     if (cnt <= n) {
//       answer = mid;
//       rt = mid;
//     }
//     if (cnt > n) break;
//   }
//   return answer;
// }

//best practice
function count(stable, dist) {
  let cnt = 1,
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((rt + lt) / 2, 10);
    if (count(stable, mid) < c) {
      rt = mid - 1;
    } else {
      answer = mid;
      lt = mid + 1;
    }
  }
  return answer;
}

console.log(solution(3, [1, 2, 8, 4, 9]));
