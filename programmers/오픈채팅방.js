function solution(record) {
  let dic = {};
  const message = [];
  for (let i = 0; i < record.length; i++) {
    const [active, id, name] = record[i].split(" ");
    if (active === "Enter") {
      dic[id] = name;
      message.push([id, "enter"]);
    } else if (active === "Leave") {
      message.push([id, "leave"]);
    } else {
      dic[id] = name;
    }
  }
  return message.map(
    ([id, active]) =>
      `${dic[id]}님이 ${active === "enter" ? "들어왔습니다." : "나갔습니다."}`
  );
}
