function solution(food) {
  let answer = "";
  for (let i = 0; i < food.length; i++) {
    if (food[i] === 1) {
      continue;
    }
    answer += i.toString().repeat(Math.floor(food[i] / 2));
  }
  return answer + "0" + [...answer].reverse().join("");
}