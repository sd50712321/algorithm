//numberToEnglishTable
const englishToNumberTable = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
}

// specialChar배열에 있는 원소를 정규식으로 찾아서 배열로 반환하는 함수
function splitBySpecialChar(s) {
    const regex = /(zero|one|two|three|four|five|six|seven|eight|nine|[0-9])/g
    const result = s.match(regex)
    return result
}


// function solution(s) {
//   let answer = ''
//   const splited = splitBySpecialChar(s)
//   splited.forEach((data) => {
//     if (data in englishToNumberTable) {
//       console.log(data)
//       answer += englishToNumberTable[data]
//     }
//     else {
//       answer += data
//     }
//   })
//   return parseInt(answer, 10);
// }


//best practice
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
console.log(solution("one4seveneight"))
