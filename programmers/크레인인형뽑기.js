function deleteDuplicateStackMember(stack, answer) {
  console.log('stack', stack);
  console.log('answer', answer);
  for(let i = 0; i < stack.length-1 ; i++) {
    if(stack[i] === stack[i+1]) {
      answer += 2;
      stack = stack.filter((_, index) => index !== i && index !== i+1);
      deleteDuplicateStackMember(stack, answer);
    }
  }
}

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (const move of moves) {
    const toys = board[move - 1];
    console.log('toys', toys);
    for(let i = toys.length - 1; i >= 0; i--) {
      if(toys[i] !== 0) {
        stack.push(toys[i]);
        board[move - 1][i] = 0;
        break;
      }
    }
    deleteDuplicateStackMember(stack, answer);
  }
  return answer;
}
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));