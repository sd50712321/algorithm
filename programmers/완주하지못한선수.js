function solution(participant, completion) {
  const participantTotal = participant.reduce((acc, cur) => {
    if(acc[cur]){
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc
  },{});
  console.log(participantTotal);
  const duplicateParticipant = Object.keys(participantTotal).filter(key => participantTotal[key] > 1);
  if (duplicateParticipant.length > 0) {
    let duplicateCompletion = completion.filter(data => {
      return duplicateParticipant.includes(data);
    });
    return duplicateCompletion[0];
  }
  else {
    const completionParticipant = participant.filter(data => {
      if(!completion.includes(data)){
        return data;
      }
    })
    console.log(completionParticipant);
    return completionParticipant[0];
  }
}
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));