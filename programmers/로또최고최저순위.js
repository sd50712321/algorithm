function solution(lottos = [38, 19, 20, 40, 15, 25], win_nums = [38, 19, 20, 40, 15, 25]) {
  var answer = [];
  const duplicateNumCount = win_nums.filter((data)=>lottos.includes(data)).length;
  const zeroNumberCount = lottos.filter((data)=>data === 0).length;
  answer.push(6 - (duplicateNumCount + zeroNumberCount) + 1)
  if (duplicateNumCount === 6){
      answer.push(1)
  }
  else if(zeroNumberCount === 6){
      answer.push(6)
  }
  else {
      answer.push(6 - duplicateNumCount + 1)            
  }

  return answer;
}
console.log(solution())