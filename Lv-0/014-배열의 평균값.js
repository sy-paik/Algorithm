// #문제
// 정수 배열 numbers가 매개변수로 주어진다. numbers의 원소의 평균값을 return

// #제한사항
// 0 <= numbers의 원소 <= 1,000
// 1 <= numbers의 길이 <= 100

// #입출력의 예
// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], result = 5.5
// numbers = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99], result = 94.0

// #내 답안
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer / numbers.length;
}

// #다른사람의 풀이
function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}

// #알게된 점
// reduce() 메소드를 통해 풀 수도 있다.
