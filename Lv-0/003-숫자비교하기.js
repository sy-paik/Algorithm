// #문제
// 정수 num1과 num2가 매개변수로 주어진다. 두 수가 같으면 1 다르면 -1 return

// #제한사항
// 0 <= num1 <= 10,000
// 0 <= num2 <= 10,000

// #입출력 예
// num1 = 2, num2 = 3, result = -1
// num1 = 11, num2 = 11, result = 1
// num1 = 7, num2 = 99, result = -1

// #내 답안
function solution(num1, num2) {
  if (num1 == num2) {
    return 1;
  } else {
    return -1;
  }
}

// #다른사람의 풀이
function solution(num1, num2) {
  var answer = num1 === num2 ? 1 : -1;
  return answer;
}
