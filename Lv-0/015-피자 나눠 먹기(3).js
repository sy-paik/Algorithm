// #문제
// 피자가게는 두 조각에서 열 조각까지 원하는 조각 수로 잘라준다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때,
// n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return

// #제한사항
// 2 <= slice <= 10
// 1 <= n <= 100

// #입출력 예
// slice = 7, n = 10, result = 2
// slice = 4, n = 12, result = 3

// #내 답안
// function solution(slice, n) {
//     let answer = 1;
//     if(n / slice < 0) {
//         answer += 1;
//     }
// }
