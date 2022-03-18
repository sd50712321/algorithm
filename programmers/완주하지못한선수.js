function solution(participant, completion) {
  const duplicateParticipant = participant.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
  },{});
  console.log(duplicateParticipant);
  let answer = completion.filter(data => {
    return participant.indexOf(data) === -1;
  });
  return answer[0];
}
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));