/**
 * 정수 n이 매개변수로 주어질 때
 * n의 각 자리 숫자의 합을 return
 */

function solution(n) {
    return n.toString().split("").map(v => Number(v)).reduce((a, b) => a+b);
}

// const num1 = 1234
// console.log(solution(num1)) // 10