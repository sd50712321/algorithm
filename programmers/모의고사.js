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
  return answer.filter((v,i) => v === Math.max(...answer)).map((v,i) => i+1)
}
console.log(solution([1,2,3,4,5]))
console.log(solution([1,3,2,4,2]))
console.log(solution([1,3,2,4,3]))