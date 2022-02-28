function solution(num,arr,arr2) {
  let answer = '';
  for (let i = 0 ; i < num ; i++) {
    if(arr[i] === arr2[i]){
      answer += 'D ';
    } else {
      if(arr[i] === 1 && arr2[i] === 3) {
        answer += 'A ';
      }
      else if (arr[i] === 2 && arr2[i] === 1) {
        answer += 'A ';
      }
      else if (arr[i] === 3 && arr2[i] === 2) {
        answer += 'A ';
      }
      else {
        answer += 'B ';
      }
    }
  }
  return answer;
}
console.log(solution(5,[2,3,3,1,3],[1,1,2,2,3]));
