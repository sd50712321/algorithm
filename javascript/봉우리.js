// function solution(n, arr) {
//   let answer = 0;
//   for(let i = 0 ; i < arr.length; i++) {
//     for(let j = 0 ; j < arr[i].length; j++) {
//       if(
//         (arr[i-1]?arr[i-1][j]:0) < arr[i][j] &&
//         (arr[i+1]?arr[i+1][j]:0) < arr[i][j] &&
//         (arr[i][j-1]?arr[i][j-1]:0) < arr[i][j] &&
//         (arr[i][j+1]?arr[i][j+1]:0) < arr[i][j]
//       ) {
//         answer += 1;
//       }
//     }
//   }
//   return answer;
// }

//best practice
function solution(n, arr) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for( let j = 0 ; j< n; j++) {
      let flag = 1;
      for( let k = 0; k < 4; k++) {
        let x = i + dx[k];
        let y = j + dy[k];
        if(x>=0 && x<n && y>=0 && y<n && arr[i][j] <= arr[x][y]) {
          flag = 0;
          break;
        }
      }
      if(flag) answer++;
    }
  }
  return answer;
}


console.log(solution(5,[[5,3,7,2,3],[3,7,1,6,1],[7,2,5,3,4],[4,3,6,4,1],[8,7,3,5,2]]));