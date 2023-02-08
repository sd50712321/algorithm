function solution(land) {
  let dp = [0, 0, 0, 0];
  for (let i = 0; i < land.length; i++) {
    // 각 단계별로 최댓값 저장
    const curr = [0, 0, 0, 0];
    for (let j = 0; i < 4; j++) {
      // 각 이전단계와 현재 단계 합 구하고 기존에 저장되어 있던 값과 비교
      for (let k = 0; k < 4; k++) {
        if (k === j) continue;
        curr[j] = Math.max(curr[j], dp[k] + land[i][j]);
      }
    }
    dp = curr;
  }

  return Math.max(...dp);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
