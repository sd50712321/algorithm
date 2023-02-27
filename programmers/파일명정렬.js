function solution(files) {
  return files.sort((a, b) => {
    // HEAD, NUMBER, TAIL을 추출
    const regExp = /(\D+)(\d{1,5})(.*)/;
    const aMatch = a.match(regExp);
    const bMatch = b.match(regExp);

    // HEAD 비교 (대소문자 구분 없이)
    const aHead = aMatch[1].toLowerCase();
    const bHead = bMatch[1].toLowerCase();
    if (aHead < bHead) return -1;
    if (aHead > bHead) return 1;

    // NUMBER 비교 (앞의 0은 무시)
    const aNumber = parseInt(aMatch[2]);
    const bNumber = parseInt(bMatch[2]);
    if (aNumber < bNumber) return -1;
    if (aNumber > bNumber) return 1;

    // 원래 입력에 주어진 순서대로 정렬
    return 0;
  });
}
