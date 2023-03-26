// #문제
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return

// #제한사항
// 2 <= numbers의 길이 <= 30
// 0 <= numbers의 원소 <= 1,000
// 0 <= num1 < num2 < numbers의 길이

// #입출력 예
// numbers =[1, 2, 3, 4, 5], num1 = 1, num2 = 3, result = [2, 3, 4]
// numbers = [1, 3, 5], num1 = 1, num2 = 2, result = [3, 5]

// #내 답안
function solution(numbers, num1, num2) {
  let answer = [];
  return numbers.slice(num1, num2 + 1);
}
