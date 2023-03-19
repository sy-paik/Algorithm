// #문제
// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분이다. x좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어진다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return

// #제한사항
// dot의 길이 = 2
// dot[0]은 x좌표, dot[1]은 y좌표를 나타낸다
// -500 <= dot의 원소 <= 500
// dot의 원소는 0이 아닙니다.

// #입출력 예
// dot = [2, 4], result = 1
// dot = [-7, 9], result = 2

// #내 답안
function solution(dot) {
  var answer = 0;
  if (dot[0] > 0 && dot[1] > 0) {
    answer = 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
    answer = 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
    answer = 3;
  } else {
    answer = 4;
  }
  return answer;
}

// #다른사람의 풀이
function solution(dot) {
  dot[0] * dot[1] > 0 ? (dot[0] > 0 ? 1 : 3) : dot[0] > 0 ? 4 : 2;
}

// #알게된 점
// 삼항연산자 사용과 x좌표와 y좌표의 곱의 양수 음수 여부에 따라 나누어 생각해볼 수 있다.
