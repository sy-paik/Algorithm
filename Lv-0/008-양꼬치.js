// #문제
// 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return

// #제한사항
// 0 < n < 1,000
// n/10 <= k < 1,000
// 서비스로 받은 음료수는 모두 마십니다.

// #입출력 예
// n = 10, k = 3, result = 124,000
// n = 64, k = 6, result = 768,000

// #내 오답
function solution(n, k) {
  var answer = 0;
  answer = 12000 * n + 2000 * (k - Math.floor(k % 10));
  return answer;
}

// 두번째 오답
function solution(n, k) {
  var answer = 0;
  answer = 12000 * n + 2000 * (k - Math.floor(k % 10));
  return answer;
}

// 최종 답안
function solution(n, k) {
  var answer = 0;
  answer = 12000 * n + 2000 * (k - Math.floor(n / 10));
  return answer;
}

// #다른사람의 풀이
function solution(n, k) {
  return n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
}

// #틀린 이유
// 처음 n, k의 변수를 바꿔서 기댓값과는 다른 결과값이 출력되었다. 그리고 며칠 전에 풀었던 몫 구하기에서 Math.floor()를 활용할 수 있었다.
// 입출력 값을 임의로 넣어보는 것이 큰 도움이 되는 것 같다.
