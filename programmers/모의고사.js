function solution(answers) {
  const student1 = new Array(2000).fill([1,2,3,4,5])
  const student2 = new Array(1250).fill([2,1,2,3,2,4,2,5])
  const student3 = new Array(1000).fill([3,3,1,1,2,2,4,4,5,5])
  let answer = [0,0,0]
  for(let i = 0 ; i < answers.length ; i++) {
    if(answers[i] === student1[parseInt(i/5,10)][i%5]) {
      answer[0]++
    }
    if(answers[i] === student2[parseInt(i/8,10)][i%8]) {
      answer[1]++
    }
    if(answers[i] === student3[parseInt(i/10,10)][i%10]) {
      answer[2]++
    }
  }
  const result = []
  answer.forEach((v,i) => {
    if(v === Math.max(...answer)) {
      result.push(i+1)
    }
  })
  return result
}

//best practice
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
  var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
  var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
  var max = Math.max(a1c,a2c,a3c);

  if (a1c === max) {answer.push(1)};
  if (a2c === max) {answer.push(2)};
  if (a3c === max) {answer.push(3)};


  return answer;
}

console.log(solution([1,2,3,4,5,1,2,3,4,5,2,3,2,4,2,5,2,1,2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5]))
console.log(solution([1,3,2,4,2]))
console.log(solution([1,3,2,4,3]))