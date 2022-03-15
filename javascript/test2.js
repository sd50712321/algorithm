//4,13,134와 같이 13과 4를 이용해서 숫자를 만들어 보는 함수
function solution(n) {
  let answer = ''
  const num = n.toString().split('')
  for(let i = 0 ; i < num.length; i++) {
    if(num[i] === '4') {
      answer += '13'
    }
    else if(num[i] === '1') {
      answer += '134'
    }
    else {
      answer += num[i]
    }
  }
  return Number(answer)
}

console.log(solution(13))