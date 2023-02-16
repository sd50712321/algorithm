function solution(m, n, board) {
  let answer = 0;
  const nBoard = board.map((v) => v.split(""));
  while (true) {
    const dBoard = new Set();
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const curBoard = nBoard[i][j];
        if (nBoard[i][j] === -1) continue;
        if (
          curBoard === nBoard[i + 1][j] &&
          curBoard === nBoard[i][j + 1] &&
          curBoard === nBoard[i + 1][j + 1]
        ) {
          dBoard.add(`${i},${j}`);
          dBoard.add(`${i + 1},${j}`);
          dBoard.add(`${i},${j + 1}`);
          dBoard.add(`${i + 1},${j + 1}`);
        }
      }
    }
    if (dBoard.size === 0) break;
    answer += dBoard.size;

    for (const p of dBoard) {
      const [x, y] = p.split(",").map((v) => parseInt(v));
      nBoard[x][y] = -1;
    }

    for (let i = 0; i < n; i++) {
      for (let j = m - 1; j >= 0; j--) {
        if (nBoard[j][i] === -1) {
          let k = j - 1;
          while (k >= 0 && nBoard[k][i] === -1) {
            k--;
          }
          if (k < 0) break;
          nBoard[j][i] = nBoard[k][i];
          nBoard[k][i] = -1;
        }
      }
    }
  }
  return answer;
}
