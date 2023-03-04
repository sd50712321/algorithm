function solution(progresses, speeds) {
  var answer = [];
  while (progresses.length) {
    if (progresses[0] >= 100) {
      let cnt = 0;
      while (progresses.length) {
        if (progresses[0] >= 100) {
          progresses.shift();
          speeds.shift();
          cnt++;
        } else break;
      }
      answer.push(cnt);
    }
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
  }
  return answer;
}
