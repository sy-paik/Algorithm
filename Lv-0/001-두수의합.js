// #문제
// 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return

// #제한사항
// -50,000 <= num1 <= 50,000
// -50,000 <= num2 <= 50,000

// #입출력
// num1 = 2 , num2 = 3, result = 5
// num1 = 100 , num2 = 2, result 102

// #내 답안
function solution(num1, num2) {
  return num1 + num2;
}

// #다른사람의 풀이
function solution(num1, num2) {
  if (-50000 <= num1 && num1 <= 50000) {
    if (-50000 <= num2 && num2 <= 50000) {
      const answer = num1 + num2;

      return answer;
    }
  }
}

// #고려할 점
// 제한사항도 고려할 것
