function solution(n, r, c) {
  const matrix = Array.from(Array(n), () => Array(n).fill(0))
  let x = 0
  let y = -1
  let upStatus = true
  const total = n*n
  // 1부터 시작
  let count = 1
  while (count <= total) {
      // if(matrix[r-1][c-1]) {
      //     break;
      // }
      console.log(x, y)
      //n차 배열이 오른쪽 끝에 도달
      if(x===(n-1) && count<=total){
          matrix[++y][x] = count++
          upStatus = false
      }
      //n차 배열이 아래쪽 끝에 도달
      if(y===(n-1) && count<=total) {
          matrix[y][++x] = count++
          upStatus = true
      }
      //n차 배열이 위쪽 끝에 도달
      if(y===0 && count<=total) {
          matrix[y][++x] = count++
          upStatus = false
      }
      //n차 배열이 왼쪽 끝에 도달
      if(x===0 && count<=total) {
          matrix[++y][x] = count++
          upStatus = true
      }
      //그 외에 
      if(upStatus===true && x!=(n-1) && y!=0 && count<=total) {
          matrix[--y][++x] = count++
      }
      if(upStatus===false && y!==(n-1) && x!=0 && count<=total) {
          matrix[++y][--x] = count++
      }
  }
  console.log(matrix)
  return matrix[r-1][c-1]
}

console.log(solution(5, 2, 4))