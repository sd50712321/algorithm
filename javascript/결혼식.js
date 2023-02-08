// function solution(arr) {
//   let answer = 0;
//   let cnt = 1;
//   arr.sort((a, b) => {
//     return a[0] - b[0];
//   });
//   console.log("arr", arr);
//   arr.reduce((prev, cur) => {
//     if (prev[1] > cur[0]) {
//       cnt++;
//     } else {
//       cnt--;
//     }
//     answer = Math.max(answer, cnt);
//     return cur;
//   });
//   return answer;
// }

//best practice
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for (let x of arr) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(cnt, answer);
  }
  return answer;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
