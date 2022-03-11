const onlyLeftHand = [1, 4, 7]
const onlyRightHand = [3, 6, 9]
const anotherNumbers = [2, 5, 8, 0]

function solution(numbers, hand) {
  let answer = ''
  let leftHandNumber = 0;
  let rightHandNumber = 0;
  numbers.map((data) => {
    if (onlyLeftHand.includes(data)) {
      leftHandNumber = data;
      answer += 'L'
    }
    else if (onlyRightHand.includes(data)) {
      rightHandNumber = data;
      answer += 'R'
    }
    else {
      
    }
  })
}