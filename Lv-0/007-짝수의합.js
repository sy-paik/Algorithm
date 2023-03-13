// #문제
// 정수 n이 주어질 때, n 이하의 짝수를 모두 더한 값을 return

// #제한사항
// 0 < n <= 100

// #입출력 예
// n = 10, result = 30
// n = 4, result = 6

// #내 오답
function solution(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      answer = answer + i;
    }
  }
  return answer;
}

// #다른사람의 풀이1
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

// #다른사람의 풀이2
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      answer += i;
    }
  }
  return answer;
}

// #틀린 이유
// let answer = 0;으로 선언을 해주어야 하는데 선언을 하지 못해 오류가 발생했다.

// #알게된 점
// 조건문을 이용하는 것뿐만 아니라 등차수열의 합 공식을 이용하여 해결할 수 있다는 것을 알게 되었다.
