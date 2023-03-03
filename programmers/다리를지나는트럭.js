function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let able = 0;
  let ing = [];
  while (truck_weights.length > 0 || ing.length > 0) {
    time++;
    if (ing.length > 0 && time - ing[0].time >= bridge_length) {
      const ingTruck = ing.shift();
      able -= ingTruck.weight;
    }

    if (weight - (able + truck_weights[0]) >= 0) {
      const truck = truck_weights.shift();
      able += truck;
      ing.push({ weight: truck, time });
    }
  }
  return time;
}
