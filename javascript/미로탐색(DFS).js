function solution(arr) {
  let cnt = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  function DFS(x, y) {
    if (x === 6 && y === 6) {
      cnt++;
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx <= 6 && ny <= 6 && nx >= 0 && ny >= 0 && arr[nx][ny] === 0) {
          arr[nx][ny] = 1;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }
      }
    }
  }
  arr[0][0] = 1;
  DFS(0, 0);
  return cnt;
}

//best practice
// function solution(board) {
//   let answer = 0;
//   const dx = [-1, 0, 1, 0];
//   const dy = [0, 1, 0, -1];
//   function DFS(x, y) {
//     if (x === 6 && y === 6) {
//       answer++;
//     } else {
//       for (let k = 0; k < 4; k++) {
//         let nx = x + dx[k];
//         let ny = y + dy[k];
//         if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
//           board[nx][ny] = 1;
//           DFS(nx, ny);
//           board[nx][ny] = 0;
//         }
//       }
//     }
//   }
//   board[0][0] = 1;
//   DFS(0, 0);
//   return answer;
// }

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
