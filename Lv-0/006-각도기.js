// #문제
// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각, 180도는 평각으로 분류. 각 angle이 매개변수로 주어질 때, 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return

// #제한사항
// 0 < angle <= 180
// angle은 정수

// #입출력 예
// angle = 70, result = 1
// angle = 90, result = 3
// angle = 180, result = 4

// #내답안
function solution(angle) {
  if (0 < angle && angle < 90) {
    return 1;
  } else if (angle == 90) {
    return 2;
  } else if (90 < angle && angle < 180) {
    return 3;
  } else {
    return 4;
  }
}

// #다른사람의 풀이
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

// #알게된 점
