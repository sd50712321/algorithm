function solution(m, n) {
  let answer = [];
  const chkArr = Array.from({ length: n }, () => 0);
  function DFS(L) {
    if (L === n) {
      console.log("chkArr", chkArr);
      answer.push([...chkArr]);
    } else {
      for (let i = 1; i <= n; i++) {
        chkArr[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer.length;
}

//best practice
// function solution() {

// }
console.log(solution(4, 3));
