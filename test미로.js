function solution(m, n, board) {
  let answer = 0;

  while (true) {
    let deleteList = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let currentBlock = board[i][j];

        if (currentBlock !== "") {
          if (
            currentBlock === board[i][j + 1] &&
            currentBlock === board[i + 1][j] &&
            currentBlock === board[i + 1][j + 1]
          ) {
            deleteList.push([i, j]);
            deleteList.push([i, j + 1]);
            deleteList.push([i + 1, j]);
            deleteList.push([i + 1, j + 1]);
          }
        }
      }
    }

    if (deleteList.length === 0) break;

    answer += deleteList.length / 4;

    for (let i = 0; i < deleteList.length; i++) {
      let x = deleteList[i][0];
      let y = deleteList[i][1];

      board[x][y] = "";
    }

    for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] !== "") {
          let x = i;
          let y = j;

          while (x > 0 && board[x - 1][y] === "") {
            board[x - 1][y] = board[x][y];
            board[x][y] = "";
            x--;
          }
        }
      }
    }
    console.log(deleteList);
  }

  console.log(answer);
  return answer;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
