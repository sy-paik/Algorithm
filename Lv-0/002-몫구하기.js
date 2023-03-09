// #문제
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return

// #제한사항
// 0 < num1 && num1 <= 100
// 0 < num2 && num2 <= 100

// #입출력 예
// num1 = 10, num2 = 5, result = 2
// num1 = 7, num2 = 2, result = 3

// #내 오답
function solution(num1, num2) {
  if (0 < num1 && num1 <= 100) {
    if (0 < num2 && num2 <= 100) {
      return num1 / num2;
    }
  }
}

// #정답
const solution = (num1, num2) => Math.floor(num1 / num2);

// #틀린이유
// 소수점 처리를 안했다. Math.floor(), parseInt()를 이용하여 소수점 버림 처리를 하지 못했다.
