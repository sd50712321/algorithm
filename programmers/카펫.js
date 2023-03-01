function solution(brown, yellow) {
  let result = [];
  for (let i = yellow; i >= 0; i--) {
    const col = i;
    const row = yellow / i;
    if (yellow % i !== 0) continue;
    if (col < row) continue;
    const square = (col + 2) * (row + 2);
    if (square === yellow + brown) {
      result.push(col + 2);
      result.push(row + 2);
      break;
    }
  }
  return result;
}

//best practice
function solution(brown, yellow) {
  const sum = brown + yellow; // 카펫의 전체 크기
  for (let i = Math.floor(Math.sqrt(sum)); i >= 1; i--) {
    // yellow의 약수 쌍 구하기
    if (sum % i === 0) {
      // 약수일 경우
      const j = sum / i;
      if ((i - 2) * (j - 2) === yellow) {
        // 갈색 격자의 수가 맞는지 확인
        return [i, j];
      }
    }
  }
}
