function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (const move of moves) {
    const toys = board[move - 1];
    while(true) {
      for (const toy of toys) {
        if (toy !== 0) {
          stack.push(toy);
          toys[toy] = 0;
          break;
        }
      }
    }
  }
  return answer;
}
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));