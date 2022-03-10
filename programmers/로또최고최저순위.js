function solution(lottos, win_nums) {
    var answer = [];
    const duplicateNumCount = win_nums.filter((data)=>lottos.includes(data)).length;
    const zeroNumberCount = lottos.filter((data)=>data === 0).length;
    if (duplicateNumCount === 0 && zeroNumberCount === 0) {
        answer.push(6)
    } else {
        answer.push(6 - (duplicateNumCount + zeroNumberCount) + 1)   
    }
    if (duplicateNumCount === 6){
        answer.push(1)
    }
    else if(zeroNumberCount === 6){
        answer.push(6)
    }
    else if (duplicateNumCount === 0 && zeroNumberCount === 0) {
        answer.push(6)
    }
    else {
        answer.push(6 - duplicateNumCount + 1)            
    }
    return answer;
}
console.log(solution())

//best practice
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}