function solution(m, musicinfos) {
  // "#"을 처리하기 쉽게 변환
  m = m
    .replace(/C\#/g, "c")
    .replace(/D\#/g, "d")
    .replace(/F\#/g, "f")
    .replace(/G\#/g, "g")
    .replace(/A\#/g, "a");

  const candidates = [];

  for (let i = 0; i < musicinfos.length; i++) {
    const [start, end, title, music] = musicinfos[i].split(",");
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    const playtime = (endHour - startHour) * 60 + endMinute - startMinute;

    // "#"을 처리하기 쉽게 변환
    const processedMusic = music
      .replace(/C\#/g, "c")
      .replace(/D\#/g, "d")
      .replace(/F\#/g, "f")
      .replace(/G\#/g, "g")
      .replace(/A\#/g, "a");

    // 실제 재생된 악보 계산
    let playedMusic = "";
    const repeatedMusic =
      processedMusic.repeat(Math.floor(playtime / processedMusic.length)) +
      processedMusic.slice(0, playtime % processedMusic.length);
    for (let j = 0; j < playtime; j++) {
      playedMusic += repeatedMusic[j];
    }

    // 기억한 멜로디가 재생된 악보에 포함되어 있는지 확인
    if (playedMusic.includes(m)) {
      candidates.push({ title, playtime });
    }
  }

  // 후보가 없으면 None 반환
  if (candidates.length === 0) {
    return "(None)";
  }

  // 재생시간이 가장 긴 음악 찾기
  candidates.sort((a, b) => b.playtime - a.playtime);

  // 재생시간이 같으면 먼저 입력된 음악 반환
  return candidates[0].title;
}
