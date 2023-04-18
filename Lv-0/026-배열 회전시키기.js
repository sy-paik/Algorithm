/* 배열 회전시키기 

배열 numbers의 원소를 direction 방향으로 한 칸씩 회전시킨 배열을 return */

function solution(numbers, direction) {
  let answer = [];
  for (let i = 1; i < numbers.length; i++) {
    if (direction == "right") {
      answer[0] = numbers[numbers.length - 1];
      answer[i] = numbers[i - 1];
    } else {
      answer[numbers.length - 1] = numbers[0];
      answer[i - 1] = numbers[i];
    }
  }
  return answer;
}

// const testA = [1, 2, 3]
// const directionA = "right"
// console.log(solution(testA, directionA)) // [3, 1, 2]

// const testB = [4, 455, 6, 4, -1, 45, 6]
// const directionB = "left"
// console.log(solution(testB, directionB)) // [455, 6, 4, -1, 45, 6, 4]
