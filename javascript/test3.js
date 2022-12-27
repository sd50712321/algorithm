function solution(total_sp, skills) {
  var answer = [];
  const answerObject = {};
  for (let i = 0; i < skills.length; i++) {
    if (!answerObject[skills[i][0]]) {
      answerObject[skills[i][0]] = [];
    }
    if (!answerObject[skills[i][1]]) {
      answerObject[skills[i][1]] = [];
    }
    answerObject[skills[i][0]].push(skills[i][1]);
  }
  const countArr = new Array(Object.keys(answerObject).length).fill(0);
  console.log("answerObject", answerObject);
  for (let i = 0; i < Object.keys(answerObject).length; i++) {
    if (answerObject[Object.keys(answerObject)[i]].length === 0) {
      countArr[i]++;
    } else {
      for (
        let k = 0;
        k < answerObject[Object.keys(answerObject)[i]].length;
        k++
      ) {
        const object = answerObject[Object.keys(answerObject)[i]][k];
        console.log("object", object);
        countArr[i] +=
          answerObject[Object.keys(answerObject)[object - 1]].length === 0
            ? 1
            : answerObject[Object.keys(answerObject)[object - 1]].length;
      }
    }
  }
  const sumArr = countArr.reduce((prev, current) => prev + current);
  answer = countArr.map((count) => count * (total_sp / sumArr));
  return answer;
}

console.log(
  solution(121, [
    [1, 2],
    [1, 3],
    [3, 6],
    [3, 4],
    [3, 5],
  ])
);
