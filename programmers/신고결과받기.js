function solution(id_list = ["muzi", "frodo", "apeach", "neo"], report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], k = 2) {
  var answer = [];
  for (let i = 0 ; i < id_list.length ; i++){
      answer.push(0)
  }
  const reportCount = new Array(id_list.length).fill(0).map(()=>new Array(id_list.length).fill(0))
  for (let i = 0 ; i < report.length ; i++) {
      const userList = report[i].split(" ")
      const reqUser = userList[0]
      const resUser = userList[1]
      reportCount[id_list.indexOf(reqUser)][id_list.indexOf(resUser)] = 1
  }
  console.log(reportCount)
  for (let i = 0 ; i < id_list.length ; i++) {
      let reportedTotalCount = 0
      for (let j = 0 ; j < id_list.length ; j++) {
          if(reportCount[j][i] === 1) {
              reportedTotalCount+=1
          }
      }
      if (reportedTotalCount >= k) {
        for (let j = 0 ; j < id_list.length ; j++) {
          if(reportCount[j][i] === 1) {
            answer[j] += 1
          }
        }
      }
  }
  return answer;
}

// best practice
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map(a=>{return a.split(' ')});
  let counts = new Map();
  for (const bad of reports){
      counts.set(bad[1],counts.get(bad[1])+1||1)
  }
  let good = new Map();
  for(const report of reports){
      if(counts.get(report[1])>=k){
          good.set(report[0],good.get(report[0])+1||1)
      }
  }
  let answer = id_list.map(a=>good.get(a)||0)
  return answer;
}
console.log(solution())