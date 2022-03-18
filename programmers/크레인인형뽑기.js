// function solution(board, moves) {
//   let answer = 0;
//   let stack = [];
//   for (let i = 0 ; i<moves.length; i++) {
//     const move = moves[i] - 1;
//     for(let j = 0 ; j<board.length ; j++) {
//       if(board[j][move] !== 0) {
//         stack.push(board[j][move]);
//         board[j][move] = 0;
//         if(stack[stack.length-1] === stack[stack.length-2]) {
//           answer += 2;
//           stack.pop();
//           stack.pop();
//         }
//         break;
//       }
//     }
//   }
//   return answer;
// }

// best practice
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    console.log(stacks);
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));