// 이분 알고리즘(결정 알고리즘)
function solution(n, arr) {
  // 최소 lt = 가장 큰값
  let lt = Math.max(...arr);
  // 최대 rt = 모든 배열 합
  let rt = arr.reduce((a, b) => a + b);

  let answer = Number.MAX_SAFE_INTEGER;
  while (lt <= rt) {
    let cnt = 1;
    let mid = parseInt((lt + rt) / 2, 10);
    arr.reduce((prev, cur) => {
      if (prev + cur <= mid) {
        return prev + cur;
      } else {
        cnt++;
        return cur;
      }
    }, 0);
    if (n >= cnt) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

//best practice
// function count(songs, capacity) {
//   let cnt = 1,
//     sum = 0;
//   for (let x of songs) {
//     if (sum + x > capacity) {
//       cnt++;
//       sum = x;
//     } else {
//       sum += x;
//     }
//   }
//   return cnt;
// }

// function solution(m, songs) {
//   let answer;
//   let lt = Math.max(...songs);
//   let rt = songs.reduce((prev, cur) => prev + cur);
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2, 10);
//     if (count(songs, mid) <= m) {
//       answer = mid;
//       rt = mid - 1;
//     } else {
//       lt = mid + 1;
//     }
//   }
//   return answer;
// }

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
