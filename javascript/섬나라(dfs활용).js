// function solution(arr) {
//   let cnt = 0;
//   const chk = Array(arr.length + 1).fill(Array(arr.length + 1).fill(0));
//   function DFS(x, y) {
//     console.log("x", x);
//     console.log("y", y);
//     if (x < 0 || y < 0 || x >= arr.length || y >= arr.length) return;
//     if (arr[x][y] === 0 && chk[x][y] === 1) {
//       cnt++;
//     } else {
//       //   console.log("arr", arr);
//       if (chk[x][y] === 0) {
//         chk[x][y] = 1;
//         arr[x][y] = 0;
//         DFS(x - 1, y - 1);
//         DFS(x - 1, y);
//         DFS(x - 1, y + 1);
//         DFS(x, y + 1);
//         DFS(x + 1, y + 1);
//         DFS(x + 1, y);
//         DFS(x + 1, y - 1);
//         DFS(x, y - 1);
//       }
//     }
//   }
//   DFS(0, 0);
//   return cnt;
// }

//best practice
function solution(board) {
  let answer = 0;
  let n = board.length;
  //   const chk = Array(board.length + 1).fill(Array(board.length + 1).fill(0));
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    board[x][y] = 0;
    for (let k = 0; k < dx.length; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < board.length &&
        ny < board.length &&
        board[nx][ny] === 1
      ) {
        DFS(nx, ny);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++;
        DFS(i, j);
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
