// #문제
// 정수 배열 numbers가 매개변수로 주어진다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return

// #제한사항
// 0 <= numbers의 원소 <= 10,000
// 2 <= numbers의 길이 <= 100

// #입출력 예
// numbers = [1, 2, 3, 4, 5], result = 20
// numbers = [0, 31, 24, 10, 1, 9], result = 744

// #내 답안
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbers.sort();
  }
  answer = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  return answer;
}
