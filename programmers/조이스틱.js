// 커서가 첫번째에 있다는 전제 하에
function solution(name) {
  const n = name.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (name[i] !== "A") {
      const diff = name[i].charCodeAt() - "A".charCodeAt();
      answer += Math.min(diff, 26 - diff);
      let nextIndex = i + 1;
      while (nextIndex < n && name[nextIndex] === "A") {
        nextIndex++;
      }
      if (i < n - 1) {
        const move = Math.min(nextIndex - i, n + i - nextIndex);
        answer += move;
      }
    }
  }
  return answer;
}

function solution(name) {
  const n = name.length;
  let answer = 0;
  let moveCount = n - 1;

  for (let i = 0; i < n; i++) {
    const diff = name[i].charCodeAt() - "A".charCodeAt();
    answer += Math.min(diff, 26 - diff);

    if (i < n - 1 && name[i + 1] === "A") {
      let nextIndex = i + 1;
      while (nextIndex < n && name[nextIndex] === "A") {
        nextIndex++;
      }
      moveCount = Math.min(
        moveCount,
        i + n - nextIndex + Math.min(i, n - nextIndex)
      );
      console.log("move");
    }
  }
  answer += moveCount;
  return answer;
}
