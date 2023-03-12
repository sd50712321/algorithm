function solution(people, limit) {
  people.sort((a, b) => b - a);
  let answer = 0;
  let start = 0;
  let end = people.length - 1;
  console.log(people);
  while (start <= end) {
    if (people[start] + people[end] <= limit) {
      start++;
      end--;
    } else {
      start++;
    }
    answer++;
  }
  return answer;
}
