//expect answer to be 2
function solution(p) {
  const result = {}
  let answer = 0
  p.forEach((data) => {
    result[data[0]] ? result[data[0]].push(data[1]) : result[data[0]] = [data[1]]
  })
  console.log(result)
  for(let i = 0 ; i < Object.keys(result).length; i++) {
    const user = Number(Object.keys(result)[i])
    const prefUsers = result[Object.keys(result)[i]]
    for(let j = 0 ; j < prefUsers.length; j++) {
      // 선호하는 유저번호
      const prefUserIdx = prefUsers[j]
      // 만약 상대방도 선호한다면
      if(result[prefUserIdx]) {
        if(result[prefUserIdx].includes(user)) {
          answer += 1
          result[user] = result[user].filter(data=>data!==prefUserIdx)
          result[prefUserIdx] = result[prefUserIdx].filter(data=>data!==user)
        }
      }
    }
  }
  return answer
}

console.log(solution([[1,3],[3,1],[3,5],[2,5],[5,3]]))