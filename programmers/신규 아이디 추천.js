function solution(numbers, hand) {
  let answer = ''
  let right = 10;
  let left = 11;
  const coordinates = {
    0: [1, -3],
    1: [0, 0],
    2: [1, 0],
    3: [2, 0],
    4: [0, -1],
    5: [1, -1],
    6: [2, -1],
    7: [0, -2],
    8: [1, -2],
    9: [2, -2],
    10: [0, -3],
    11: [2, -3],
  }
  numbers.map((data) => {
    if (data === 1 || data === 4 || data === 7) {
      answer += 'L'
      left = data
    }
    else if (data === 3 || data === 6 || data === 9) {
      answer += 'R'
      right = data
    }
    else {
      const leftDistance = Math.abs(coordinates[left][0] - coordinates[data][0]) + Math.abs(coordinates[left][1] - coordinates[data][1])
      const rightDistance = Math.abs(coordinates[right][0] - coordinates[data][0]) + Math.abs(coordinates[right][1] - coordinates[data][1])
      if (leftDistance < rightDistance) {
        answer += 'L'
        left = data
      }
      else if(leftDistance > rightDistance) {
        answer += 'R'
        right = data
      }
      else {
        hand === 'right' ? answer += 'R' : answer += 'L'
        hand === 'right' ? right = data : left = data
      }
    }
  })
  return answer;
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'))

//best practice
function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L"
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
  let h = { L: [1, 1], R: [1, 1] }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
    let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
    let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
    if (distL === distR) {
      h[hand] = [position[x], 0]
      return hand
    }
    if (distL < distR) {
      h.L = [position[x], 0]
      return "L"
    }
    h.R = [position[x], 0]
    return "R"
  }).join("")
}