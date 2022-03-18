function solution(absolutes, signs) {
  let answer = 0;
  signs.map((data, idx)=> data === true ? answer += absolutes[idx] : answer -= absolutes[idx]);
  return answer;
}

// best practice
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

console.log(solution([1,2,3,4,6,7,8,0], [true,false,true,false,true,false,true,false]));