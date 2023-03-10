// #문제
// 첫 번째 분수의 분자와 분모를 numer1, denom1, 두 번째 분수의 분자와 분모를 numer2, denom2가 매개변수로 주어진다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열 return

// #제한사항
// 0 < numer1, denom1, numer2, denom2 < 1,000

// #입출력 예
// numer1 = 1, denom1 = 2, numer2 = 3, denom2 = 4, result = [5, 4]
// numer1 = 9, denom1 = 2, numer2 = 1, denom2 = 3, result = [29, 6]

// #다른 사람의 풀이
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}

// #틀린 이유
// 최대공약수에 대한 접근을 못함
