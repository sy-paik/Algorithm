// #문제
// 피자가게는 두 조각에서 열 조각까지 원하는 조각 수로 잘라준다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때,
// n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return

// #제한사항
// 2 <= slice <= 10
// 1 <= n <= 100

// #입출력 예
// slice = 7, n = 10, result = 2
// slice = 4, n = 12, result = 3
// slice = 5, n = 6, result = 2

// n / slice == 1 + 나머지 3 ==> 2
// n / slice = result

// #내 답안
function solution(slice, n) {
    let answer = 1;
    if(n/slice == 0) {
        answer = Math.floor(n/slice);
    }
    else(n/slice != 0) {
        answer = Math.floor(n/slice) + 1;
    }
    return answer;
  }

// #다시 푼 답안
function solution(slice, n) {
    let answer = 0;
    if(n%slice == 0) {
        answer = Math.floor(n/slice);
    }
    else {
        answer = Math.floor(n/slice) + 1;
    }
    return answer;
}

// // #틀린 이유
// 파이썬을 하다가 자바스크립트의 몫, 나머지 연산자 사용하는게 명확하지 않음
// if문에서 % 나머지 연산자를 이용해야했지만 나누기로 해서 오류가 있었음
