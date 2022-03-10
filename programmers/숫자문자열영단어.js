function chkNumberFormat(str) {
    var regExp = /^[0-9]*$/;
    if (!regExp.test(str)) {
      return true;
    }
    return false;
}

function solution(s) {
  const englishToNumberTable = {
    'ze': 4,
    'on': 3,
    'tw': 3,
    'th': 5,
    'fo': 4,
    'fi': 4,
    'si': 3,
    'se': 5,
    'ei': 5,
    'ni': 4,
  }
  var answer = '';
  while(true) {
    const str = s.substring(0,1)
    console.log(str)
    if (str === '') break;
    if(chkNumberFormat(str)) {
      answer += s;
      s = s.substring(1);
    } else {
      const validStr = s.substring(0, 2);
      for (let i = 0; i < 10; i++) {
        if(englishToNumberTable[i] === validStr) {
          answer += i;
          s.substring(englishToNumberTable[i])
        }
      }
    }
  }
  return answer;
}
console.log(solution('one4seveneight'));