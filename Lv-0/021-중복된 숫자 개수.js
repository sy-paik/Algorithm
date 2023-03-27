// #문제
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇개 있는지를 return

// #제한사항
// 1 <= array의 길이 <= 100
// 0 <= array의 원소 <= 1,000
// 0 <= n <= 1,000

// #입출력 예
// array = [1, 1, 2, 3, 4, 5], n = 1, result = 2
// array = [0, 2, 3, 4], n = 1, result = 0

// #내 답안
function solution(array, n) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      count += 1;
    }
  }
  return count;
}
