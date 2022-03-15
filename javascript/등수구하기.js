function solution(num,arr) {
  // let answer = Array.from({length: num}, () => 1);
  let answer = new Array(num).fill(1);
  // for(let i = 0; i < num; i++) {
  //   for (let j = i+1 ; j < num; j++) {
  //     if(arr[i] < arr[j]){
  //       answer[i]++;
  //     } else if (arr[i] === arr[j]) {
  //     } else {
  //       answer[j]++;
  //     }
  //   }
  // }
  for(let i = 0 ; i<num; i++) {
    for(let j = 0; j<num; j++) {
      if(arr[i] > arr[j]) answer[j]++
    }
  }
  return answer;
}

console.log(solution(6,[87,89,92,100,100,76]));