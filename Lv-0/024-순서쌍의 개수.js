// #문제
// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기한다. 자연수 n이 매개변수로 주어질 때, 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return

// #제한사항
// 1 <= n <= 1,000,000

// #입출력 예
// n =20, result = 6
// n = 100, result = 9

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer += 1;
    }
  }
  return answer;
}

// 약수의 개수 구하는 것과 같은 원리
