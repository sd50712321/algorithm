"use strict";
// const obj1 = {
//   a : 't1',
//   sub2 : function () {
//     console.log(`hi ${this.a}`)
//   }
// }
// obj1.sub2()
// const obj2 = {
//   b : 't2',
//   sub4 : () => {
//     console.log(`${this}`)
//     console.log(`hi ${this.b}`)
//   }
// }
// obj2.sub4()

// dfs 미로 찾기
function solution(maps) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const n = maps.length - 1;
  const m = maps[0].length - 1;
  const chk = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => 0)
  );
  chk[0][0] = 1;
  let cnt = 1;
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(x, y) {
    if (x === m && y === n) {
      answer = Math.min(answer, cnt);
    } else {
      for (let k = 0; k < 4; k++) {
        // console.log('chk', chk)
        const nx = x + dx[k];
        const ny = y + dy[k];
        // console.log("nx", nx);
        // console.log("ny", ny);
        if (nx >= 0 && nx <= m && ny >= 0 && ny <= n && maps[ny][nx] === 1) {
          maps[ny][nx] = 0;
          chk[ny][nx] = 1;
          cnt++;
          DFS(nx, ny);
          chk[ny][nx] = 0;
          maps[ny][nx] = 1;
          cnt--;
        }
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
