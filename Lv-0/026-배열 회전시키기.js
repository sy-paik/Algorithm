/* 배열 회전시키기 

배열 numbers의 원소를 direction 방향으로 한 칸씩 회전시킨 배열을 return */

function solution(numbers, direction) {
  if (direction == "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}

// const testA = [1, 2, 3]
// const directionA = "right"
// console.log(solution(testA, directionA)) // [3, 1, 2]

// const testB = [4, 455, 6, 4, -1, 45, 6]
// const directionB = "left"
// console.log(solution(testB, directionB)) // [455, 6, 4, -1, 45, 6, 4]
