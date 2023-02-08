// function solution(arr) {
//   let cnt = 0;
//   const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//   const dy = [0, -1, -1, -1, 0, 1, 1, 1];
//   const queue = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i][j] === 1) {
//         cnt++;
//         arr[i][j] = 0;
//         queue.push([i, j]);
//         while (queue.length) {
//           const dot = queue.shift();
//           for (let k = 0; k < 8; k++) {
//             const nx = dot[0] + dx[k];
//             const ny = dot[1] + dy[k];
//             if (
//               nx >= 0 &&
//               ny >= 0 &&
//               nx < arr.length &&
//               ny < arr.length &&
//               arr[nx][ny] === 1
//             ) {
//               arr[nx][ny] = 0;
//               queue.push([nx, ny]);
//             }
//           }
//         }
//       }
//     }
//   }
//   return cnt;
// }

//best practice
function solution(board) {
  let answer = 0;
  let n = board.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, -1, -1, -1, 0, 1, 1, 1];
  const queue = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;
        while (queue.length) {
          const [x, y] = queue.shift();
          for (let k = 0; k < 8; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
