// function solution(array, commands) {
//   var answer = [];
//   for(const command of commands) {
//     const temp = array.slice(command[0] - 1, command[1])
//     temp.sort()
//     answer.push(temp[command[2] - 1])
//   }
//   return answer;
// }

//best practice
function solution(array, commands) {
  return commands.map(([start, last, select]) => {
    return array.slice(start - 1, last).sort((a,b)=>a-b)[select - 1]
  })
}
console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))