function solution(a) {
  const answer = a
  const sum = a.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0 ; i<a.length ; i++) {
    for(let j = i+1 ; j<a.length ; j++) {
      if(sum - (a[i]+a[j]) === 100){
        a.splice(i, 1);
        a.splice(j, 1);
        // answer = a.filter(x => x !== a[i] && x !== a[j]);
      }
    }
  }
  return answer;
}

console.log(solution([20, 7 ,23 ,19 ,10, 15, 25, 8, 13]));