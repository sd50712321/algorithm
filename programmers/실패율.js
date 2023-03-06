function solution(N, stages) {
  const result = {};
  stages.sort((a, b) => a - b);
  stages.map((stage) => {
    if (stage < N) {
      if (result[stage]) result[stage]++;
      else result[stage] = 1;
    }
  });
  const keys = Object.keys(result);
  const values = Object.values(result);
  let answer = [];
  let max = Number.MIN_SAFE_INTEGER;
  let totalPerson = 0;
  for (let i = 0; i < keys.length; i++) {
    console.log("max", max);
    if (values[i] / (stages.length - keys[i - 1] ? keys[i - 1] : 0) > max) {
      answer = answer.splice(i, 1, keys[i]);
      max = values[i];
    } else {
      answer.push(keys[i]);
    }
    console.log("answer", answer);
  }
  // console.log(result)
  return answer;
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

// 몇개월후 다시
function solution(N, stages) {
  stages.sort((a, b) => a - b);
  const answer = [];
  let stage = 0;
  while (stage < N) {
    stage++;
    let totalCnt = stages.length;
    let failureCnt = 0;
    while (stages[0] === stage) {
      stages.shift();
      failureCnt++;
    }
    const failPercent = failureCnt / totalCnt;
    answer.push({ stage, failPercent });
  }
  return answer
    .sort((a, b) => b.failPercent - a.failPercent)
    .map((v) => v.stage);
}

// ai
function solution(N, stages) {
  let failRates = [];
  let users = stages.length;

  for (let i = 1; i <= N; i++) {
    let count = stages.filter((stage) => stage === i).length;
    let failRate = 0;
    if (count !== 0) {
      failRate = count / users;
      users -= count;
    }
    failRates.push({ stage: i, rate: failRate });
  }

  failRates.sort((a, b) => b.rate - a.rate);

  return failRates.map((obj) => obj.stage);
}
