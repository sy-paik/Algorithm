// #문제
// 40살인 선생님이 몇 년도에 태어났는지 궁금하다. 나이 age가 주어질 때, 2022년을 기준으로 출생 연도를 return

// #제한사항
// 0 < age <= 120
// 나이는 태어난 연도에 1살로 1년마다 1씩 증가

// #입출력 예
// age = 40, result = 1983
// age = 23, result = 2000

// #내 답안
function solution(age) {
  var year = 2023 - age;
  return year;
}

// #다른사람의 풀이
function solution(age) {
  return new Date.getFullYear() - age + 1;
}

// #알게된 점
// getFullYear() 메서드를 이용할 수 있다! 하지만 2022년이 기준인데 해가 바뀌면 기준 년도가 달라지기 때문에 기준년도를 잘 살펴봐야한다.
