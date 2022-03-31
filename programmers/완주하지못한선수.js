// 2n은 되는데 n^2는 안됨
// function solution(participant, completion) {    
//   const comObj = {};
//   for(let key of completion){
//       if(comObj[key]){
//         comObj[key] = comObj[key] + 1;
//       }else{
//         comObj[key] = 1;
//       }
//   }

//   for(let key of participant){
//       if(!comObj[key] || comObj[key]===0){
//           return key;
//       }else if(comObj[key]){
//           comObj[key] = comObj[key] - 1;
//       }
//   }
// }

//best practice
const solution = (participant,completion) => participant.find(
  (participant)=>{
    console.log('completion in first',completion)
    console.log('participant',participant)
    console.log('completion[participant] in participant find',completion[participant])
    return !completion[participant]--
  },
  completion.map(
    (participant)=>{
      console.log('completion',completion)
      console.log('participant in completion map',participant)
      console.log('(completion[participant]|0)',(completion[participant]|0))
      return completion[participant]=(completion[participant]|0)+1
    }
  )
)
// console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
// console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));