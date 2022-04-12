function solution(N, stages) {
  const result = {}
  stages.sort((a,b)=>a-b)
  stages.map(stage=>{
    if (stage < N){
      if(result[stage]) result[stage]++
      else result[stage] = 1
    }
  })
  const keys = Object.keys(result)
  const values = Object.values(result)
  let answer = []
  let max = Number.MIN_SAFE_INTEGER
  let totalPerson = 0
  for(let i = 0 ; i < keys.length; i++) {
    console.log('max', max)
    if((values[i]/(stages.length - keys[i-1]?keys[i-1]:0)) > max) {
      answer = answer.splice(i,1,keys[i])
      max = values[i]
    } else {
      answer.push(keys[i])
    }
    console.log('answer', answer)
  }
  // console.log(result)
  return answer;
}
console.log(solution(5,[2,1,2,6,2,4,3,3]));