// #문제
// 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return

// #제한사항
// 1 <= array의 길이 <= 100
// 1 <= height <= 200
// 1 <= array의 원소 <= 200

// #입출력 예
// array = [149, 180, 192, 170],  height = 167, result = 3
// array = [180, 120, 140], height = 190, result = 0

// #내 오답
function solution(array, height) {
  var answer = 0;
  for (let i in array) {
    if (i > height) {
      answer += 1;
    }
  }
  return answer;
}

// #재시도한 정답
function solution(array, height) {
  var answer = 0;
  for (let h of array) {
    if (h > height) {
      answer += 1;
    }
  }
  return answer;
}

// #틀린 이유
// for ... in에는 객체, 배열, 문자열이 열거형 속성을 갖고 있지만 명확한 열거 속성을 지닌 객체에 통상적으로 for... in을 사용하고 배열, 문자열과 같은 iterable object 객체는 통상적으로 for ... of을 사용한다. for... in과 for ... of 의 차이 정리하기
